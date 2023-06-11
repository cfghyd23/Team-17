const mongoose = require('mongoose');

const bloodSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  }
});

const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  availability: {
    type: [bloodSchema],
    default: []
  }
}, { timestamps: true});

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);
module.exports = BloodBank;
