const express = require('express');
const BlogSchema = require('../models/blog');

const router = express.Router();



router.get('/blog', (req, res) => {
    BlogSchema
        .find({})
        .then((data) => {
            res.json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
})

router.get('/blog/:id', (req, res) => {
    BlogSchema
        .findById(req.params.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
})

router.post('/blog', (req, res) => {
    const newBlog = BlogSchema(req.body);

    newBlog
        .save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
        
    })

router.delete('/blog/:id', (req, res) => {
    BlogSchema
        .findByIdAndRemove(req.params.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`));
})

router.put('/blog/:id', (req, res) => {
    const {title, author, url, likes} = req.body

    BlogSchema
        .findByIdAndUpdate(req.params.id, {title, author, url, likes }, {new: true})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(error => console.log(`Error: ${error.message}`))
})



module.exports = router;