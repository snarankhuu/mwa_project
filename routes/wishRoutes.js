const mongoose = require("mongoose");

const Wish = mongoose.model("wishes");

module.exports = app => {

  app.get('/wish/list', (req, res) => {
    Wish.find({}, (err, wishes) => {
      if (err) console.log(err)
      console.log(wishes)
      res.json(wishes)
    })

  });

  app.post('/wish/add', async (req, res) => {
    
    const newWish = new Wish(req.body)
    await newWish.save((err, data) => {
      if (err) console.log(err)
      res.json(data)
    })



  });

};
