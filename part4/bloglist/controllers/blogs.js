const express = require('express');
const BlogSchema = require('../models/blog');
const userSchema = require('../models/user');
const jwt = require('jsonwebtoken');

const getBlog =  async (req, res) => {
        const blog = await BlogSchema.find({}).populate('userId', {username: 1, name: 1, email: 1, passwordHash: 1, blogs: 1});
        res.status(200).json(blog);

};

const getBlogID = async (req, res) => {

        const blog = await BlogSchema.findById(req.params.id);
        res.status(200).json(blog);

        
};


const postBlog = async (req, res) => {
    
        const {title, author, url, likes, userId} = req.body;
        const token = req.token

        const decodedToken = jwt.verify(token, process.env.SECRET);

        if(!decodedToken.id) {
                return res.status(400).json({error: 'token missing or invalid'});
        }

        const user = await userSchema.findById(decodedToken.id)

        const newBlog = new BlogSchema({
            title,
            author,
            url,
            likes,
            userId: user.id
        });

        const savedNote = await newBlog.save();
        user.blogs = user.blogs.concat(savedNote._id)
        await user.save();
        res.status(201).json(savedNote);
};

const deleteBlog = async (req, res) => {

        const token = req.token

        const decodedToken = jwt.verify(token, process.env.SECRET);


        if(!token || !decodedToken.id) {
                return res.status(400).json({error: 'token or wrong user'})
        }

        const blogId = req.params.id;
        const blog = await BlogSchema.findById(blogId);
        

        if(blog.userId.toString() === decodedToken.id.toString()) {
                await BlogSchema.deleteOne({_id: blogId})
                return res.status(204).json({ message: 'Blog Deleted'})
        }

};

const putBlog = async (req, res) => {
    const {title, author, url, likes, user} = req.body;

        const blog = await BlogSchema.findByIdAndUpdate(req.params.id, {title, author, url, likes, user}, {new: true});
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
