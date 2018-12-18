'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  email: String,
  senha: String
});

module.exports = mongoose.model('User', UserSchema);
