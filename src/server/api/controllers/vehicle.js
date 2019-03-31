const mongoose = require('mongoose');
const Vehicles = require('../models/vehicle');
const validator = require('validator');
const passport = require('passport');
const { check, validationResult } = require('express-validator/check');
const AWS = require('aws-sdk');
let s3;

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

s3 = new AWS.S3();


exports.getAllVehicles = (req, res) => {
  const limit = parseInt(req.params.limit);
  const skip = parseInt(req.params.skip);

  Vehicles.find().skip(skip).limit(limit)
    .then(vehicles => {
      res.status(200).send(vehicles);
    }).catch(findErr => {
      res.status(500).send('could not retrieve vehicles');
    });
}

exports.addNewVehicle = async (req, res) => {
  let validations = validationResult(req);
  let saved;

  if (!validations.isEmpty()) {
    return res.status(422).json({ validations: validations.array({ onlyFirstError: true }) });
  }

  let newVehicle = new Vehicles({
    '_id': new mongoose.Types.ObjectId(),
    'basic_info': {
      'make': req.body.make,'model': req.body.model,
      'trim': req.body.trim,'year': req.body.year,
      'type': req.body.type,'price': req.body.price,
      'exterior_colour': req.body.exterior_colour,
      'interior_colour': req.body.interior_colour,
      'kilometres': req.body.kilometres,'fuel_type': req.body.fuel_type,
      'doors': req.body.doors,'seats': req.body.seats,
      'description': req.body.description
    },
    'mechanical_info': {
      'car_proof': req.body.car_proof, 'transmission': req.body.transmission,
      'engine_size': req.body.engine_size, 'cylinders': req.body.cylinders,
      'horsepower': req.body.horsepower, 'torque': req.body.torque,
      'recommended_fuel': req.body.recommended_fuel,
    },
    'fuel_economy': {
      'city': req.body.city,'highway': req.body.highway,
      'combined': req.body.combined
    },
    'dealership': req['user']['_id'],
    'date': {
      'created': new Date(),
      'modified': new Date()
    },
    'views': 0
  });

  try {
    saved = await newVehicle.save();

    try {
      let awsCopy = {};
      let awsDelete = {};
      let filesToCopy = req.files;

      for (const file of filesToCopy) {
        awsCopy = {
          Bucket: `${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${saved.dealership}/${saved._id}`,
          CopySource: file.location,
          Key: `${file.key.split('/')[2]}`
        };

        awsDelete = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: `${file.key}`
        };

        await s3.copyObject('awsCopy').promise();
        await s3.deleteObject(awsDelete).promise();
      }

      res.status(200).send('vehicle created successfully');
    } catch (e) {
      console.log(e);
      deleteOnFail(saved._id, req.files);
      return res.status(500).send('failed to upload images');
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send('failed to save vehicle');
  }
}

deleteOnFail = async (id, files) => {
  try {
    await Vehicles.findOneAndRemove({ _id: id });
    let awsDelete = {};

    if (files.length > 0) {
      for (const file of files) {
        awsDelete = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.key
        };

        await s3.deleteObject(awsDelete).promise();
      }
    }

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
