const mongoose = require("mongoose");
const {Appointment} = require("../models/appointment.js")
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    isVolunteer: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: String,
      trim: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    place: {
      type: String,
      trim: true,
    },
    appointments: {
      type: [Appointment],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema)