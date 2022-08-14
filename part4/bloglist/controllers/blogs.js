const express = require('express');
const BlogSchema = require('../models/blog');


const getBlog =  async (req, res) => {
        const blog = await BlogSchema.find({});
        res.status(200).json(blog);

};

const getBlogID = async (req, res) => {

        const blog = await BlogSchema.findById(req.params.id);
        res.status(200).json(blog);

        
};

const postBlog = async (req, res) => {
    
        const blog = await BlogSchema(req.body).save();
        res.status(201).json(blog);

};

const deleteBlog = async (req, res) => {

        const blog = await BlogSchema.findByIdAndRemove(req.params.id);
        res.status(200).json(blog);
};

const putBlog = async (req, res) => {
    const {title, author, url, likes} = req.body;

        const blog = await BlogSchema.findByIdAndUpdate(req.params.id, {title, author, url, likes}, {new: true});
        res.status(200).json(blog);

};


const blogController = {
    getBlog,
    getBlogID,
    postBlog,
    deleteBlog,
    putBlog
};

module.exports = blogController;
