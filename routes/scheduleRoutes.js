const mongoose = require("mongoose");

const Schedule = mongoose.model("schedules");

module.exports = app => {

    app.get('/api/schedule/add', (req, res) => {
        console.log(req.body)
        const newSchedule = new Schedule({
            avalaibleSeat: 12,
            from: "fairfield",
            to: "chicago",
        })
        newSchedule.save((err, data) => {
            if (err) console.log(err)
            console.log(data)
            res.json(newSchedule)
        })


    });
    app.get('/api/schedule/list', (req, res) => {
        Schedule.find({}, (err, schedules) => {
            if (err) console.log(err)
            console.log(schedules)
            res.json(schedules)
        })

    });

};
