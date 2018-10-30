var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var db = require('./db/mongoose');
var elastic = require('./db/elastic');
var user = require('./controllers/userController');
var booking = require('./controllers/bookingController');
var lab = require('./controllers/labController');
var package = require('./controllers/packageController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user',user);
app.use('/booking',booking);
app.use('/lab',lab);
app.use('/package',package);
app.listen(80,()=>{console.log("listening on localhost")});
