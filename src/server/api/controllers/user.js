const mongoose = require('mongoose')
const Users = require('../models/user')
const validator = require('validator')
const _ = require('underscore')
const argon2 = require('argon2')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const AWS = require('aws-sdk')
const { validationResult } = require('express-validator/check')
let s3

// configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

s3 = new AWS.S3()

exports.register = async (req, res) => {
  let email = validator.isEmail(req.body.email) ? req.body.email : null
  let password = req.body.password
  let dealership = req.body.dealership
  let hash
  let user
  let saved
  let validations = validationResult(req)

  if (!validations.isEmpty()) {
    this.deleteFile(req.file)
    return res.status(422).json({ validations: validations.array({ onlyFirstError: true }) })
  }

  // Validates email
  if (!email) {
    this.deleteFile(req.file)
    return res.status(400).send('invalid email')
  }

  // Check if a logo is included
  if (!req.file) {
    return res.status(400).send('must include a logo')
  }

  // Check if email/dealership already exists
  user = await Users.find().or([{ 'email': email }, { 'dealership.name': dealership }])
  if (user.length > 0) {
    this.deleteFile(req.file)
    return res.status(500).send('user already exists')
  }

  // Hash password, create new user and save
  try {
    hash = await argon2.hash(password)

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
    })

    saved = await newUser.save()

    try {
      let awsCopy = {
        Bucket: `${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${saved._id}`,
        CopySource: req['file']['location'],
        Key: `logo.${req['file']['mimetype'].split('/')[1]}`
      }
      let awsDelete = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${req['file']['key']}`
      }

      await s3.copyObject(awsCopy).promise()
      await s3.deleteObject(awsDelete).promise()

      res.status(200).send('user created successfully')
    } catch (e) {
      console.log(e)
      this.deleteOnFail(saved._id, req.file)
      return res.status(500).send('failed to upload logo')
    }
  } catch (e) {
    console.log(e)
    this.deleteFile(req.file)
    return res.status(500).send('error registering')
  }
}

exports.updateUser = (req, res) => {
  let validations = validationResult(req)
  let includesPhotos = false
  let changingPassword = false
  let changingEmail = false
  let changingDealership = false
  let updateUser = {
    email: [],
    password: [],
    dealership: [],
    date: {}
  }
  let updateUserParsed = {
    dealership: {},
    date: {}
  }

  if (!validations.isEmpty()) {
    //this.deleteFile(req.file)
    return res.status(422).json({ validations: validations.array({ onlyFirstError: true }) })
  }

  if (!_.isEmpty(req.files)) {
    includesPhotos = true
  }

  if (req.body.confirmation_email) {
    changingEmail = true

    try {
      const user = await Users
        .find({
          email: req.body.email,
          _id: req['user']['_id']
        })
    } catch (e) {

    }

    updateUserParsed['email'] = req.body.email
  }

  if (req.body.password_confirmation) {
    changingPassword = true
    try {
      const hash = await argon2.hash(req.body.password)
      updateUserParsed['password'] = hash
    } catch (e) {
      console.log(e)
      return res.status(500).send('unable to update password"')
    }
  }

  if (req.bodoy.dealership_confirmation) {
    changingDealership = true
    updateUserParsed['dealership']['name'] = req.body.dealership
  }

/*
  if (req.body.email) updateUser['email'].push(req.body.email)
  if (req.body.confirmation_email) updateUser['email'].push(req.body.confirmation_email)
  if (req.body.password) updateUser['password'].push(req.body.password)
  if (req.body.password_confirmation) updateUser['password'].push(req.body.password_confirmation)
  if (req.body.dealership) updateUser['dealership'].push(req.body.dealership)
  if (req.body.dealership_confirmation) updateUser['dealership'].push(req.body.dealership_confirmation)

  if (_.isEmpty(updateUser['email'])) delete updateUser['email']
  if (_.isEmpty(updateUser['confirmation_email'])) delete updateUser['confirmation_email']
  if (_.isEmpty(updateUser['password'])) delete updateUser['password']
  if (_.isEmpty(updateUser['password_confirmation'])) delete updateUser['password_confirmation']
  if (_.isEmpty(updateUser['dealership']['name'])) delete updateUser['dealership']['name']
  if (_.isEmpty(updateUser['dealership_confirmation'])) delete updateUser['dealership_confirmation']

  updateUser['date']['modified'] = new Date()
*/


  res.send(updateUser)
}

exports.login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.log(err)
      console.log(user)
      return res.status(500).send('error logging in')
    }

    if (info !== undefined) {
      console.log(info)
      return res.status(500).send('error logging in')
    }

    req.logIn(user, { session: false }, (err) => {
      if (err) {
        console.log(err)
        return res.status(500).send('error logging in')
      }

      const jwtBody = {
        '_id': user[0]._id,
        'email': user[0].email,
        'dealership.name': user[0]['dealership']['name'],
        'date': user[0].date
      }

      const options = {
        'issuer': process.env.ISSUER,
        'subject': process.env.SUBJECT,
        'audience': process.env.AUDIENCE,
        'expiresIn': process.env.EXPIRES_IN,
        'algorithm': process.env.ALGORITHM
      }

      const token = jwt.sign({ 'user': jwtBody }, process.env.PRIVATE_KEY, options)

      res.status(200).json({ 'token': token })
    })
  })(req, res)
}

// TODO: These functions could possibly be moved into a separate file
this.deleteOnFail = async (id, file) => {
  try {
    await Users.findOneAndDelete({ _id: id })

    if (file.length > 0) {
      let awsDelete = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.key
      }

      await s3.deleteObject(awsDelete).promise()
    }

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

this.deleteFile = async (file) => {
  try {
    if (file.length > 0) {
      let awsDelete = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.key
      }

      await s3.deleteObject(awsDelete).promise()
    }

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
