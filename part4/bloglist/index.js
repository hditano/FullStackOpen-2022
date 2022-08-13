require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogs_routers');
const logger = require('./utils/logger');
const {PORT, MONGODB_URI} = require('./settings');



app.use(cors())
app.use(express.json());


const ConnectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error(`Error: ${error.message}`);
    }

}

ConnectToMongoDB();

app.use('/api', blogRouter);


const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})

module.exports = server