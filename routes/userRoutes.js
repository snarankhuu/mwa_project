const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {

  app.post('/user/login', (req, res) => {
      res.end()
  });

};
