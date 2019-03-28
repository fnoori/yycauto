const mongoose = require('mongoose');
const Vehicles = require('../models/vehicle');
const validator = require('validator');
const passport = require('passport');
const { check, validationResult } = require('express-validator/check');

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

    if (!saved) {
      return res.status(500).send('failed to save vehicle');
    }

    res.status(200).send('vehicle saved successfully');
  } catch (e) {
    console.log(e);
    return res.status(500).send('failed to save vehicle');
  }
}
