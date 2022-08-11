const express = require('express');
const blogSchema = require('../models/blog');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('create blog');
})

module.exports = {
    router
};