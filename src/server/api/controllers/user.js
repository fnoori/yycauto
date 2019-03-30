const mongoose = require('mongoose');
const Users = require('../models/user');
const validator = require('validator');
const argon2 = require('argon2');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
let s3;

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

s3 = new AWS.S3();

exports.register = async (req, res) => {
  let email = validator.isEmail(req.body.email) ? req.body.email : null;
  let password = req.body.password;
  let dealership = req.body.dealership;
  let hash;
  let user;
  let saved;

  // Validates email
  if (!email) {
    return res.status(400).send('invalid email');
  }

  // Check if email/dealership already exists
  user = await Users.find().or([{ 'email': email }, { 'dealership.name': dealership }]);
  if (user.length > 0) {
    return res.status(500).send('user already exists');
  }

  // Hash password, create new user and save
  try {
    hash = await argon2.hash(password);

    const newUser = new Users({
      '_id': new mongoose.Types.ObjectId(),
      'email': email,
      'password': hash,
      'dealership': {
        'name': dealership
      },
      'date': {
        'created': new Date(),
        'modified': new Date()
      }
    });

    saved = await newUser.save();

    try {
      let awsCopy = {
        Bucket: `${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${saved._id}`,
        CopySource: req['file']['location'],
        Key: `logo.${req['file']['mimetype'].split('/')[1]}`
      };
      let awsDelete = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${req['file']['key']}`
      };

      await s3.copyObject(awsCopy).promise();
      await s3.deleteObject(awsDelete).promise();

      res.status(200).send('user created successfully');

    } catch (e) {
      console.log(e);
      deleteOnFail(saved._id, req.file);
      return res.status(500).send('failed to upload logo');
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send('error registering');
  }
}

exports.login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.log(err);
      console.log(user);
      return res.status(500).send('error logging in');
    }

    if (info != undefined) {
      console.log(info);
      return res.status(500).send('error logging in');
    }

    req.logIn(user, { session: false }, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('error logging in');
      }

      const jwtBody = {
        '_id': user[0]._id,
        'email': user[0].email,
        'dealership.name': user[0]['dealership']['name'],
        'date': user[0].date
      };

      const options = {
        'issuer': process.env.ISSUER,
        'subject': process.env.SUBJECT,
        'audience': process.env.AUDIENCE,
        'expiresIn': process.env.EXPIRES_IN,
        'algorithm': process.env.ALGORITHM
      };

      const token = jwt.sign({ 'user': jwtBody }, process.env.PRIVATE_KEY, options);

      res.status(200).json({ 'token': token });
    });
  })(req, res);
}

deleteOnFail = async (id, files) => {
  let filesToDelete = [];
  filesToDelete.push(files);

  try {
    await Users.findOneAndRemove({ _id: id });

    let awsDelete = {};
    if (filesToDelete.length > 0) {
      filesToDelete.forEach(async (file) => {
        awsDelete = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${file.key}`
        };

        await s3.deleteObject(awsDelete).promise();
      });
    }

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
