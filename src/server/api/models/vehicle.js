const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  basic_info: {
    make: {
      type: String,
      required: true,
      maxlength: 20
    },
    model: {
      type: String,
      required: true,
      maxlength: 20
    },
    year: {
      type: Number,
      required: true,
      maxlength: 20
    },
    price: {
      type: Number,
      required: true,
      maxlength: 20
     }
  },
  dealership: mongoose.Schema.Types.ObjectId,
  date: {
    created: {
      type: Date,
      required: true
    },
    modified: {
      type: Date,
      required: true
    }
  },
  views: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
