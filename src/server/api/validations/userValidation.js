const { check } = require('express-validator/check')
const globalVars = require('../utils/globalVars')
const _ = require('underscore')

exports.validate = (method) => {
  switch (method) {
    case 'registration': {
      return [
        check('email')
          .exists()
          .isLength({ max: globalVars.EMAIL_MAX_LENGTH }),
        check('password')
          .exists(),
        check('dealership')
          .exists()
          .isLength({ max: globalVars.DEALERSHIP_NAME_MAX_LENGTH })
      ]
    }

    case 'updateUser': {
      return [
        check('email')
          .optional()
          .isLength({ max: globalVars.EMAIL_MAX_LENGTH }),
        check('confirmation_email')
          .optional()
          .custom((confirmation_email, { req }) => {
            if (
                (!_.isUndefined(confirmation_email) && !_.isUndefined(req.body.email)) &&
                (confirmation_email !== req.body.email)
              ) {
              throw new Error('email confirmation does not match')
            } else {
              return true
            }
          }),
        check('password')
          .optional(),
        check('password_confirmation')
          .optional()
          .custom((password_confirmation, { req }) => {
            if (
              (!_.isUndefined(req.body.password) && !_.isUndefined(password_confirmation)) &&
              (password_confirmation !== req.body.password)
            ) {
              throw new Error('password confirmation does not match'())
            } else {
              return true
            }
          }),
        check('dealership')
          .optional()
          .isLength({ max: globalVars.DEALERSHIP_NAME_MAX_LENGTH }),
        check('dealership_confirmation')
          .optional()
          .custom((dealership_confirmation, { req }) => {
            if (
              (!_.isUndefined(req.body.dealership) && !_.isUndefined(dealership_confirmation)) &&
              (dealership_confirmation !== req.body.dealership)
            ) {
              throw new Error('dealership confirmation does not match')
            } else {
              return true
            }
          })
      ]
    }

    default: {
      return []
    }
  }
}
