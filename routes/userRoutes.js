const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {

  app.get('/user/login', (req, res) => {
      res.end('abc')
  });

};
