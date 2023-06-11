const express = require('express');
const router = express.Router();
const NGO = require('../models/ngo');

// Create a new NGO
exports.createNGO = async (req, res) => {
  try {
    const { name, location, dateFounded, phone, email } = req.body;
    const ngo = new NGO({ name, location, dateFounded, phone, email });
    const savedNGO = await ngo.save();
    res.status(201).json(savedNGO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all NGOs
exports.readAllNGO = async (req, res) => {
  try {
    const ngos = await NGO.find();
    res.json(ngos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single NGO
exports.readOneNGO = async (req, res) => {
  try {
    const ngo = await NGO.findById(req.params.id);
    if (!ngo) {
      return res.status(404).json({ message: 'NGO not found' });
    }
    res.json(ngo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a NGO
exports.UpdateNGO = async (req, res) => {
  try {
    const { name, location, dateFounded, phone, email } = req.body;
    const updatedNGO = await NGO.findByIdAndUpdate(req.params.id, { name, location, dateFounded, phone, email }, { new: true });
    if (!updatedNGO) {
      return res.status(404).json({ message: 'NGO not found' });
    }
    res.json(updatedNGO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a NGO
exports.DeleteNGO = async (req, res) => {
  try {
    const deletedNGO = await NGO.findByIdAndRemove(req.params.id);
    if (!deletedNGO) {
      return res.status(404).json({ message: 'NGO not found' });
    }
    res.json({ message: 'NGO deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = router;
