const express = require('express');
const db = require('./config/config');
const routes = require('./routes');
const mongoose = require('mongoose');
 
const cwd = process.cwd();
const user = require('./models/user');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
const port = 3001;

db.once('open', () => {
 app.listen(port, () => {
 console.log(`Server now running on port ${port}!`);
 console.log(`cwd:${cwd}`);
});
})
