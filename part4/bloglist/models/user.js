const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
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
    },
    userId: String,
    blogs: [{
        type: Schema.Types.ObjectId,
        ref: 'blog'
    }]
});

module.exports = mongoose.model('user', userSchema);