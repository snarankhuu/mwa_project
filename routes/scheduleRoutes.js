const mongoose = require("mongoose");

const Schedule = mongoose.model("schedules");

module.exports = app => {

    app.post('/api/schedule/add', (req, res) => {
        const newSchedule = new Schedule(req.body)
        newSchedule.save((err, data) => {
            if (err) console.log(err)
            res.json(newSchedule)
        })
    });
    app.get('/api/schedule/list', (req, res) => {
        Schedule.find({}, (err, schedules) => {
            if (err) console.log(err)
            res.json(schedules)
        })

    });

};
