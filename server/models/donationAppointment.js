const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['blood bank', 'received'],
    required: true
  }
});

const donationAppointmentSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  bloodType: {
    type: String,
    required: true,
    trim: true
  },
  appointments: {
    type: [appointmentSchema],
    default: []
  }
}, { timestamps: true });

const DonationAppointment = mongoose.model('DonationAppointment', donationAppointmentSchema);
module.exports = DonationAppointment;
