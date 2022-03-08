// import express
const express = require('express');
// import Apollo
const { ApolloServer } = require('apollo-server-express');
// import path
const path = require('path');

// import db connection
const db = require('./config/connection');
// import schemas
const { typeDefs, resolvers } = require('./schemas');
// import security middleware
const { authMiddleware } = require('./utils/auth');

// open port
const PORT = process.env.PORT || 3000;
// initialize express
const app = express();
// set up server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});
// initialize middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));
// if in development, use build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// send to frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// initialize graphql
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// start the server
startApolloServer(typeDefs, resolvers);