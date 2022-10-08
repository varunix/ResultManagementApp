const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resultmanagement');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongoDB"));

db.once('open', console.log.bind(console, "Connected to Database :: MongoDB"));