const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
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
    dateFounded: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const NGO = mongoose.model('NGO', ngoSchema);
module.exports = NGO;
