const express = require('express');
const router = express.Router();

const { getUser, createUser, deleteUser, getUserId } = require('../controllers/users');

router.get('/user/:id', getUserId)

router.get('/user', getUser);

router.post('/user', createUser);

router.delete('/user/:id', deleteUser )


module.exports = router;