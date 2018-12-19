//dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
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
//env
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'web/dist/web')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "web", "dist", "web", "index.html"));
    });
}

app.use(bodyParser.json());
app.use(cors());
app.use(require('./middlewares/authenticate'));

//routes

require("./routes/userRoutes")(app);
require("./routes/scheduleRoutes")(app);
require("./routes/wishRoutes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
