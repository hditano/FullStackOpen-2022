const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
})

module.exports = mongoose.model('blog', blogSchema);