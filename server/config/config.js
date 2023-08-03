const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mlgibson8:abcdefg@cluster0.5a988ya.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
/* 
const { connect, connection } = require("mongoose");
connect("mongodb://127.0.0.1:27017/visionaryVault", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection; */

module.exports = mongoose.connection;