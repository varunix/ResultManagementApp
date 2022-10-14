const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Auth = mongoose.model('Auth', teacherSchema);
module.exports = Auth;
