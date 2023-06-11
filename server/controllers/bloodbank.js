const express = require('express');
const router = express.Router();
const BloodBank = require("../models/bloodbank");

// CREATE blood bank
exports.createBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.create(req.body);
    res.status(201).json(bloodBank);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ all blood banks
exports.readAllBloodBank = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.json(bloodBanks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ single blood bank
exports.readOneBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findById(req.params.id);
    if (!bloodBank) {
      return res.status(404).json({ error: 'Blood bank not found' });
    }
    res.json(bloodBank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE blood bank
exports.UpdateBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bloodBank) {
      return res.status(404).json({ error: 'Blood bank not found' });
    }
    res.json(bloodBank);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE blood bank
exports.DeleteBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findByIdAndDelete(req.params.id);
    if (!bloodBank) {
      return res.status(404).json({ error: 'Blood bank not found' });
    }
    res.json({ message: 'Blood bank deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
