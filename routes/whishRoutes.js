const mongoose = require("mongoose");

const Whish = mongoose.model("whishes");

module.exports = app => {

  app.post('/whish', (req, res) => {
      res.end()
  });

};
