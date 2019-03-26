const { check } = require('express-validator/check');

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
