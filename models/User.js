const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: false
  },
  password: String,
  active: { type: Boolean, default: true }
});

mongoose.model('users', userSchema);
