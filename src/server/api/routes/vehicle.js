const express = require('express');
const router = express.Router();
const Controller = require('../controllers/vehicle');
const passport = require('passport');
const validation = require('../validations/vehicleValidation');

router.post('/new-vehicle',
  passport.authenticate('jwt', { session: false }),
  validation.validate('addNewVehicle'),
  Controller.addNewVehicle);

module.exports = router;
