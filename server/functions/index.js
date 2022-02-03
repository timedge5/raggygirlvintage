const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

require("./config");
const typeDefs = require("./schema/typeDefs/typeDefs");
const resolvers = require("./schema/resolvers/resolvers");

const app = express();

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: "/", cors: true });
};

main();

exports.graphql = functions.https.onRequest(app);
