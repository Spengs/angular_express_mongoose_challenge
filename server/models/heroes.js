var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  firstName: String,
  lastName: String,
  city: String,
  powerName: String
});

var Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
