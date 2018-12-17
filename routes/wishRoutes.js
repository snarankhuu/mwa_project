const mongoose = require("mongoose");

const Wish = mongoose.model("wishes");

module.exports = app => {

  app.post('/wish', (req, res) => {
      res.end()
  });

};
