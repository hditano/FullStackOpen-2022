require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Test');
})

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.get('/api/blogs/:id', (req, res) => {
   Blog
     .findById(req.params.id)
     .then((data) => {
        if(data){
            res.json(data)
        } else {
            res.status(404).end()
        }
     })
     .catch(error => console.log('error: ', error.message))
    
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => console.log(error.message))
})

app.delete('/api/blogs/:id', (req, res) => {

  Blog
    .findByIdAndRemove(req.params.id)
    .then((data) => {
        if(data) {
            res.json(data)
        } else {
            res.status(404).end()
        }
    })
    .catch(error => console.log('error:', error.message))
})

app.put('/api/blogs/:id', (req, res) => {

    const newBlog = {
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        likes: req.body.likes
    }

    Blog
      .findByIdAndUpdate(req.params.id, {$set: newBlog}, {new: true})
      .then((data) => {
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(404).json(data)
        }
      })
      .catch(err => console.log('error:', err.message))

})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})