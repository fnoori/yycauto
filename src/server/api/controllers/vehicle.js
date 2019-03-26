const mongoose = require('mongoose');
const Vehicles = require('../models/vehicle');
const validator = require('validator');
const passport = require('passport');
const { check, validationResult, checkSchema, body } = require('express-validator/check');

exports.addNewVehicle = async (req, res) => {
  let saved;
  let make = req.body.make && (!validator.isEmpty(req.body.make));
  let model = req.body.model;
  let year = req.body.year;
  let price = req.body.price;

  checkSchema({
    _id: {
      custom: {
        options: () => {
          return validator.isMongoId(req['user']['_id']);
        }
      }
    }
  })(req, res);

/*

  let newVehicle = new Vehicles({
    '_id': new mongoose.Types.ObjectId(),
    'basic_info': {
      'make': req.body.make,
      'model': req.body.model,
      'year': req.body.year,
      'price': req.body.price
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

    if (!saved) {
      return res.status(500).send('failed to save vehicle');
    }

    res.status(200).send('vehicle saved successfully');
  } catch (e) {
    console.log(e);
    return res.status(500).send('failed to save vehicle');
  }
  */
}

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {

     return [
        body('userName', 'userName doesn't exists').exists(),

        body('email', 'Invalid email').exists().isEmail(),

        body('phone').optional().isInt(),

        body('status').optional().isIn(['enabled', 'disabled'])
      ]
    }
  }
}
