const express = require('express');
const router = express.Router();

const {loginRouter} = require('../controllers/login');

router.post('/login', loginRouter);




module.exports = router;