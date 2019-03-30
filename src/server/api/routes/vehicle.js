const express = require('express');
const router = express.Router();
const Controller = require('../controllers/vehicle');
const passport = require('passport');
const validation = require('../validations/vehicleValidation');

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

if (process.env.NODE_ENV === 'development') {
  upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET_NAME,
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, `development/uploads/${Date.now().toString()}.${file.mimetype.split('/')[1]}`);
      }
    }),
    fileFilter: fileFilter
  });
} else if (process.env.NODE_ENV === 'development-aws') {

} else if (process.env.NODE_ENV === 'production') {
  upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET_NAME,
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, `${Date.now().toString()}.${file.mimetype.split('/')[1]}`);
      }
    }),
    fileFilter: fileFilter
  });
}

router.get('/get-all-vehicles/:skip/:limit', Controller.getAllVehicles);

router.post('/new-vehicle',
  passport.authenticate('jwt', { session: false }),
  upload.array('images', 10),
  validation.validate('addNewVehicle'),
  Controller.addNewVehicle);

module.exports = router;
