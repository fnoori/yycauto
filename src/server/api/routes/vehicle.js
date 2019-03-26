const express = require('express');
const router = express.Router();
const Controller = require('../controllers/vehicle');
const passport = require('passport');

router.post('/new-vehicle',
  passport.authenticate('jwt', { session: false }),
  Controller.validate('addNewVehicle'),
  Controller.addNewVehicle);

module.exports = router;
