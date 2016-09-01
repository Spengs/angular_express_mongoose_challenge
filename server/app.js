var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

/** ---------- MODULES ---------- **/
var heroes = require('./routes/heroes');
/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/heroes', heroes);
/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error:', err);
});
/** ---------- START SERVER ---------- **/
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log("server is running on port", app.get('port'));
});
