const mongoose = require('mongoose');
const Vehicles = require('../models/vehicle');
const validator = require('validator');
const _ = require('underscore');
const passport = require('passport');
const dot = require('dot-object');
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
    const deleteRes = deleteFiles(req.files);
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
      let fileLocations = [];

      for (const file of filesToCopy) {
        awsCopy = {
          Bucket: `${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${saved.dealership}/${saved._id}`,
          CopySource: file.location,
          Key: file.key.split('/')[2]
        };
        awsDelete = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.key
        };

        fileLocations.push(`${process.env.AWS_BASE_URL}/${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${saved.dealership}/${saved._id}/${file.key.split('/')[2]}`);
        await s3.copyObject(awsCopy).promise();
        await s3.deleteObject(awsDelete).promise();
      }

      await Vehicles.findOneAndUpdate({ _id: saved._id }, { images: fileLocations });

      res.status(200).send('vehicle created successfully');
    } catch (e) {
      console.log(e);
      const deleteRes = deleteOnFail(saved._id, req.files);
      return res.status(500).send('failed to upload images');
    }
  } catch (e) {
    console.log(e);
    const deleteRes = deleteFiles(req.files);
    return res.status(500).send('failed to save vehicle');
  }
}

exports.updateVehicle = async (req, res) => {
  let validations = validationResult(req);
  let includesPhotos = false;
  let updateVehicle = {
    basic_info: {},
    mechanical_info: {},
    fuel_economy: {},
    date: {}
  };
  let updateVehicleDotNotation;
  let vehicleId = req.params.vehicle_id;

  if (!validations.isEmpty()) {
    //const deleteRes = deleteFiles(req.files);
    return res.status(422).json({ validations: validations.array({ onlyFirstError: true }) });
  }

  if (!_.isEmpty(req.files)) {
    includesPhotos = true;
  }

  // only update those values that need to be updated
  if (req.body.make) updateVehicle['basic_info']['make'] = req.body.make;
  if (req.body.model) updateVehicle['basic_info']['model'] = req.body.model;
  if (req.body.trim) updateVehicle['basic_info']['trim'] = req.body.trim;
  if (req.body.type) updateVehicle['basic_info']['type'] = req.body.type;
  if (req.body.exterior_colour) updateVehicle['basic_info']['exterior_colour'] = req.body.exterior_colour;
  if (req.body.interior_colour) updateVehicle['basic_info']['interior_colour'] = req.body.interior_colour;
  if (req.body.kilometres) updateVehicle['basic_info']['kilometres'] = req.body.kilometres;
  if (req.body.fuel_type) updateVehicle['basic_info']['fuel_type'] = req.body.fuel_type;
  if (req.body.doors) updateVehicle['basic_info']['doors'] = req.body.doors;
  if (req.body.seats) updateVehicle['basic_info']['seats'] = req.body.seats;
  if (req.body.description) updateVehicle['basic_info']['description'] = req.body.description;
  if (req.body.year) updateVehicle['basic_info']['year'] = req.body.year;
  if (req.body.price) updateVehicle['basic_info']['price'] = req.body.price;
  if (req.body.car_proof) updateVehicle['mechanical_info']['car_proof'] = req.body.car_proof;
  if (req.body.transmission) updateVehicle['mechanical_info']['transmission'] = req.body.transmission;
  if (req.body.engine_size) updateVehicle['mechanical_info']['engine_size'] = req.body.engine_size;
  if (req.body.cylinders) updateVehicle['mechanical_info']['cylinders'] = req.body.cylinders;
  if (req.body.horsepower) updateVehicle['mechanical_info']['horsepower'] = req.body.horsepower;
  if (req.body.torque) updateVehicle['mechanical_info']['torque'] = req.body.torque;
  if (req.body.recommended_fuel) updateVehicle['mechanical_info']['recommended_fuel'] = req.body.recommended_fuel;
  if (req.body.city) updateVehicle['fuel_economy']['city'] = req.body.city;
  if (req.body.highway) updateVehicle['fuel_economy']['highway'] = req.body.highway;
  if (req.body.combined) updateVehicle['fuel_economy']['combined'] = req.body.combined;

  updateVehicle['date']['modified'] = new Date();

  // check if any of the nested documents is empty, if it is, delete it
  if (_.isEmpty(updateVehicle.basic_info)) delete updateVehicle.basic_info;
  if (_.isEmpty(updateVehicle.mechanical_info)) delete updateVehicle.mechanical_info;
  if (_.isEmpty(updateVehicle.fuel_economy)) delete updateVehicle.fuel_economy;

  updateVehicleDotNotation = dot.dot(updateVehicle);

  try {
    let vehicle = await Vehicles.findById(vehicleId);
    let updated = await Vehicles.update({ _id: vehicleId }, updateVehicleDotNotation);

    if (updated.n === 0) {
      deleteFiles(req.files);
      return res.status(500).send('could not find anything associated with that id');
    }

    if (includesPhotos) {
      try {
        let awsCopy = {};
        let awsDelete = {};
        let fileLocations = [];

        for (const file of req.files) {
          awsCopy = {
            Bucket: `${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${vehicle.dealership}/${vehicle._id}`,
            CopySource: file.location,
            Key: file.key.split('/')[2]
          };
          awsDelete = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: file.key
          };

          fileLocations.push(`${process.env.AWS_BASE_URL}/${process.env.AWS_BUCKET_NAME}/${process.env.NODE_ENV}/users/${vehicle.dealership}/${vehicle._id}/${file.key.split('/')[2]}`);
          await s3.copyObject(awsCopy).promise();
          await s3.deleteObject(awsDelete).promise();

          let updatedPhotos = await Vehicles.findOneAndUpdate({ _id: vehicleId }, { $push: { 'images': fileLocations } });
          if (updatedPhotos.n === 0) {
            deleteFiles(req.files);
            return res.status(500).send('failed to upload photos');
          }
        }
      } catch (e) {
        console.log(e);
        deleteFiles(req.files);
        return res.status(500).send('failed to upload photos');
      }
    }

    res.status(200).send('vehicle successfully updated');
  } catch (e) {
    console.log(e);
    deleteFiles(req.files);
    return res.status(500).send('failed to update vehicle');
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

deleteFiles = async (files) => {
  try {
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
