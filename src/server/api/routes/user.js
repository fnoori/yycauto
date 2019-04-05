const express = require('express')
const router = express.Router()
const Controller = require('../controllers/user')
const validation = require('../validations/userValidation')
const mongoose = require('mongoose')
const passport = require('passport')

let aws = require('aws-sdk')
let multer = require('multer')
let multerS3 = require('multer-s3')
let fileFilter
let upload

let s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' ||
  file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read',
    cacheControl: 'no-cache',
    key: function (req, file, cb) {
      cb(null, `${process.env.NODE_ENV}/uploads/${mongoose.Types.ObjectId()}.${file.mimetype.split('/')[1]}`)
    }
  }),
  fileFilter: fileFilter
})

router.post('/register', upload.single('logo'),
  validation.validate('registration'),
  Controller.register)
router.post('/login', Controller.login)

router.patch('/update-user/:user_id',
  passport.authenticate('jwt', { session: false }),
  upload.single('logo'),
  validation.validate('updateUser'),
  Controller.updateUser)

module.exports = router
