const {ApolloServer} = require('apollo-server-express');
const axios = require('axios');
const {ApolloServerPluginDrainHttpServer} = require('apollo-server-core');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const express = require('express');
const http = require('http');
require('dotenv').config()

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const User = require('./schema/User');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

console.log('connecting to mongoDB');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((error) => {
    console.log('error connection to mongoDB', error.message);
  })

  const start = async () => {
    const app = express();
    const httpServer = http.createServer(app);

    const schema = makeExecutableSchema({ typeDefs, resolvers});

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({req}) => {
        const auth = req ? req.headers.authorization : null
        if(auth && auth.toLowerCase().startsWith('bearer ')) {
          const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET)
          const currentUser = await User.findById(decodedToken.id);
          console.log(currentUser)
          return {currentUser}
        }
      },
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    await server.start()

    server.applyMiddleware({
      app,
      path: '/',
    })

    const PORT = 4000;

    httpServer.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}`))
  }

  start()