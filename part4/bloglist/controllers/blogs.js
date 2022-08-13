const express = require('express');
const BlogSchema = require('../models/blog');


const getBlog =  async (req, res) => {
    try {
        const blog = await BlogSchema.find({});
        res.json(blog);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

const getBlogID = async (req, res) => {
    try {
        const blog = await BlogSchema.findById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

};

const postBlog = async (req, res) => {
    
    try {
        const blog = await BlogSchema(req.body).save();
        res.status(200).json(blog);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

};

const deleteBlog = async (req, res) => {
    try {
        const blog = await BlogSchema.findByIdAndRemove(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

const putBlog = async (req, res) => {
    const {title, author, url, likes} = req.body;
    try {
        const blog = await BlogSchema.findByIdAndUpdate(req.params.id, {title, author, url, likes}, {new: true});
        res.status(200).json(blog);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

};


const blogController = {
    getBlog,
    getBlogID,
    postBlog,
    deleteBlog,
    putBlog
};

module.exports = blogController;
