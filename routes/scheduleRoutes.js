const mongoose = require("mongoose");

const Schedule = mongoose.model("schedules");

module.exports = app => {

    app.post('/schedule', (req, res) => {
        res.end()
    });

};
