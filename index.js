//dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
//key
const keys = require("./config/keys");
//models
require("./models/User");
require("./models/Schedule");
require("./models/Wish");

const app = express();

mongoose.connect(keys.mongoURI, {
  auth: {
    user: keys.user,
    password: keys.mongopass
  },
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(cors());
app.use(require('./middlewares/authenticate'));

//routes

require("./routes/userRoutes")(app);
require("./routes/scheduleRoutes")(app);
require("./routes/wishRoutes")(app);

//env
if (process.env.NODE_ENV === "production") {
  app.use(express.static("web/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "web", "build", "index.html"));
  });
}




const PORT = process.env.PORT || 8000;
app.listen(PORT);
