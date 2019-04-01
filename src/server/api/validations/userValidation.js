const { check } = require('express-validator/check')
const globalVars = require('../utils/globalVars')

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

    default: {
      return []
    }
  }
}
