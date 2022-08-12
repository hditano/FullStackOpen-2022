const express = require('express');
const {getBlog, getBlogID, postBlog, deleteBlog, putBlog} = require('../controllers/blogs');

const router = express.Router();



router.get('/blog', getBlog);

router.get('/blog/:id', getBlogID );


router.post('/blog', postBlog);

router.delete('/blog/:id', deleteBlog);

router.put('/blog/:id', putBlog);



module.exports = router;