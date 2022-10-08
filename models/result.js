const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    roll: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;