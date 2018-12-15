const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  active: { type: Boolean, default: true }
});

mongoose.model('users', userSchema);
