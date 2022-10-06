const express = require('express');
const app = express();
const port = 8000;

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