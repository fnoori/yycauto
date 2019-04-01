const { check } = require('express-validator/check');
const globalVars = require('../utils/globalVars');

exports.validate = (method) => {
  switch (method) {
    case 'addNewVehicle': {
      return [
        check('make')
          .exists()
          .isAlpha()
          .isLength({ max: globalVars.MAKE_MAX_LENGTH }),
        check('model')
          .exists()
          .isAlpha()
          .isLength({ max: globalVars.MODEL_MAX_LENGTH }),
        check('trim')
          .exists()
          .isAlpha()
          .isLength({ max: globalVars.TRIM_MAX_LENGTH }),
        check('type')
          .exists()
          .isAlpha()
          .isLength({ max: globalVars.TYPE }),
        check('exterior_colour')
          .exists()
          .isLength({ max: globalVars.EXTERIOR_COLOUR }),
        check('interior_colour')
          .optional()
          .isLength({ max: globalVars.INTERIOR_COLOUR }),
        check('kilometres')
          .exists()
          .isNumeric()
          .isLength({ max: globalVars.KILOMETRES }),
        check('fuel_type')
          .exists()
          .isAlpha()
          .isLength({ max: globalVars.FUEL_TYPE }),
        check('doors')
          .optional()
          .isNumeric()
          .isLength({ max: globalVars.DOORS }),
        check('seats')
          .optional()
          .isNumeric()
          .isLength({ max: globalVars.SEATS }),
        check('description')
          .optional()
          .isLength({ max: globalVars.DESCRIPTION }),
        check('year')
          .exists()
          .isNumeric()
          .isLength({ max: globalVars.YEAR_MAX_LENGTH }),
        check('price')
          .exists()
          .isNumeric()
          .isLength({ max: globalVars.PRICE_MAX_LENGTH }),


          check('car_proof')
            .optional()
            .isBoolean(),
          check('transmission')
            .exists()
            .isAlpha()
            .isLength({ max: globalVars.TRANSMISSION_MAX_LENGTH }),
          check('engine_size')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.ENGINE_SIZE_MAX_LENGTH }),
          check('cylinders')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.CYLINDERS_MAX_LENGTH }),
          check('horsepower')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.HORSEPOWER_MAX_LENGTH }),
          check('torque')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.TORQUE_MAX_LENGTH }),
          check('recommended_fuel')
            .exists()
            .isAlpha()
            .isLength({ max: globalVars.RECOMMENDED_FUEL_MAX_LENGTH }),


          check('city')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.FUEL_ECONOMY_CITY }),
          check('highway')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.FUEL_ECONOMY_HIGHWAY }),
          check('combined')
            .optional()
            .isNumeric()
            .isLength({ max: globalVars.FUEL_ECONOMY_COMBINED })
      ];
    }

    default: {
      return []
    }
  }
}
