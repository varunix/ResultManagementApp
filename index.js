const express = require('express');
const app = express();
const session = require('express-session');
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./configs/mongoose');
const flash = require('connect-flash');
const customMware = require('./configs/middleware');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const passport = require('./configs/passport-local-strategy');
const LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

//environmental variable
require('dotenv').config();

//Body Parser Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//this is basic expression session initialization
app.use(session({
    name: 'resultmanagement',
    secret:'flashmessage',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/resultmanagement',
        autoremove: 'disabled'
    },
    function(err) {
        console.log(err || 'connect-mongod setup ok');
    })
}));

//init passport on every route call
app.use(passport.initialize());
//allowing passport to use express-session
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setFlash);

//setting up views
app.set('views', './views');
app.set('view engine', 'ejs');

//for CSS
app.use(express.static('./assets'));
//for routers
app.use('/', require('./routes/home'));

app.listen(port, function(err) {
    if(err) {
        console.log('Error in running the server');
    }

    console.log(`Server is running at port at ${port}`);
});