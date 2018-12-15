const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//models
require("./models/User");
require("./models/Schedule");
require("./models/Whish");

const app = express();

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());

app.use(require('./middlewares/authenticate'));

//routes
require("./routes/userRoutes")(app);
require("./routes/scheduleRoutes")(app);
require("./routes/whishRoutes")(app);

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
