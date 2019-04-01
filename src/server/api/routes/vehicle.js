const express = require('express');
const router = express.Router();
const Controller = require('../controllers/vehicle');
const passport = require('passport');
const validation = require('../validations/vehicleValidation');
const mongoose = require('mongoose');

let aws = require('aws-sdk');
let multer = require('multer');
let multerS3 = require('multer-s3');
let fileFilter;
let upload;

let s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' ||
  file.mimetype == 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, `${process.env.NODE_ENV}/uploads/${mongoose.Types.ObjectId()}.${file.mimetype.split('/')[1]}`);
    }
  }),
  fileFilter: fileFilter
});

router.get('/get-all-vehicles/:skip/:limit', Controller.getAllVehicles);
router.get('/get-vehicle-by-id/:vehicle_id', Controller.getVehicleById);
router.get('/get-vehicles-by-dealership-id/:dealership_id', Controller.getVehiclesByDealershipId);

router.post('/new-vehicle',
  passport.authenticate('jwt', { session: false }),
  upload.array('images', 10),
  validation.validate('addNewVehicle'),
  Controller.addNewVehicle);

router.patch('/update-vehicle/:vehicle_id',
  passport.authenticate('jwt', { session: false }),
  upload.array('images', 10),
  validation.validate('updateVehicle'),
  Controller.updateVehicle);

module.exports = router;
