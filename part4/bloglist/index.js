require('dotenv').config()
require('express-async-errors');
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogs_routers');
const userRouter = require('./routes/users_routers');
const loginRouter = require('./routes/login_routers');
const middleware = require('./utils/middleware/tokenUtils');
const logger = require('./utils/logger');
const {PORT, MONGODB_URI} = require('./settings');
const  { errorHandler, unknownEndpoint } = require('./utils/middleware/errorHandlers');


app.use(cors())
app.use(express.json());




const ConnectToMongoDB = async () => {
        await mongoose.connect(MONGODB_URI);
        logger.info('Connected to MongoDB');

}

ConnectToMongoDB();

app.use(middleware.getToken);
app.use('/api', blogRouter);
app.use('/api', userRouter);
app.use('/api', loginRouter);




const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = { app, server}