const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema(
  {
    donorId: {
      type: String,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["blood bank", "received"],
      required: true,
    },
  },
  { _id: false }
);

module.exports = mongoose.model("Appointment", appointmentSchema)