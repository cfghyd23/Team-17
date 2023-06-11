const express = require('express');
const router = express.Router();
const DonationAppointment = require('../models/donationAppointment');

// Create a donation appointment
exports.createBloodBank = async (req, res) => {
  try {
    const { location, bloodType } = req.body;
    const appointment = new DonationAppointment({
      location,
      bloodType
    });
    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create donation appointment' });
  }
}

// Get all donation appointments
exports.readAllBloodBank = async (req, res) => {
  try {
    const appointments = await DonationAppointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch donation appointments' });
  }
}

// Get a specific donation appointment by ID
exports.readOneBloodBank = async (req, res) => {
  try {
    const appointment = await DonationAppointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Donation appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch donation appointment' });
  }
}

// Update a donation appointment
exports.UpdateBloodBank = async (req, res) => {
  try {
    const { location, bloodType } = req.body;
    const appointment = await DonationAppointment.findByIdAndUpdate(
      req.params.id,
      { location, bloodType },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({ error: 'Donation appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update donation appointment' });
  }
}

// Delete a donation appointment
exports.DeleteBloodBank = async (req, res) => {
  try {
    const appointment = await DonationAppointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Donation appointment not found' });
    }
    res.json({ message: 'Donation appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete donation appointment' });
  }
}

