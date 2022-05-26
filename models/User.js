const mongoose = require('mongoose'),
 { Schema, model } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  username: {
    type: String,
    maxlength: 100
  },
  password: {
    type: String,
    minlength: 6
  },
  role: {
    type: String,
    default: '1'
  },
  image: {
    type: String
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

const User = model('User', userSchema);

module.exports = { User };