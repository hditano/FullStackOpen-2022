const express = require('express');
const BlogSchema = require('../models/blog');


const getBlog = (req, res) => {
        BlogSchema
            .find({})
            .then((data) => {
                res.json(data)
            })
            .catch(error => console.log(`Error: ${error.message}`))
    };

const getBlogID = (req, res) => {
    BlogSchema
        .findById(req.params.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
};

const postBlog = (req, res) => {
    const newBlog = BlogSchema(req.body);

    newBlog
        .save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
        
    };

const deleteBlog = (req, res) => {
    BlogSchema
        .findByIdAndRemove(req.params.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`));
    };

const putBlog = (req, res) => {
    const {title, author, url, likes} = req.body

    BlogSchema
        .findByIdAndUpdate(req.params.id, {title, author, url, likes }, {new: true})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
    };


const blogController = {
    getBlog,
    getBlogID,
    postBlog,
    deleteBlog,
    putBlog
};

module.exports = blogController;
