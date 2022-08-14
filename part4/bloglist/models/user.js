const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    email: String,
    passwordHash: {
        type: String,
        minlength: 3,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);