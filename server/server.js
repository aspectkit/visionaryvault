const express = require('express');
const db = require('./config/config');
const routes = require('./routes');
const mongoose = require('mongoose');

const cwd = process.cwd();
const artist = require('./models/artist');
const customer = require('./models/customer');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
const port = 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
db.once('open', () => {
 app.listen(port, () => {
 console.log(`Server now running on port ${port}!`);
 console.log(`cwd:${cwd}`);
});
})
};

startApolloServer(typeDefs, resolvers);
