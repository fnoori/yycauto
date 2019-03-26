const mongoose = require('mongoose');
const Vehicles = require('../models/vehicle');
const validator = require('validator');
const passport = require('passport');
const { check, validationResult, checkSchema, body } = require('express-validator/check');

exports.addNewVehicle = async (req, res) => {
  let validations = validationResult(req);

  if (!validations.isEmpty()) {
    return res.status(422).json({ validations: validations.array() });
  }

  let saved;
  let make = req.body.make && (!validator.isEmpty(req.body.make));
  let model = req.body.model;
  let year = req.body.year;
  let price = req.body.price;

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
}

exports.validate = (method) => {
  switch (method) {
    case 'addNewVehicle': {
      return [
        check('make')
          .isAlpha()
          .isLength({ max: 20 }),
        check('model')
          .isAlpha()
          .isLength({ max: 20 }),
        check('year')
          .isNumeric()
          .isLength({ max: 20 }),
        check('price')
          .isNumeric()
          .isLength({ max: 20 })
      ];
    }

    default: {
      return []
    }
  }
}
