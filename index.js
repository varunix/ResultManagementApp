const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./configs/mongoose');
const flash = require('connect-flash');
const customMware = require('./configs/middleware');

//middlewares
app.use(session({
    secret:'flashmessage',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(customMware.setFlash);
app.use(bodyParser.urlencoded({ extended: false }))

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