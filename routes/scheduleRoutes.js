const mongoose = require("mongoose");

const Schedule = mongoose.model("schedules");

module.exports = app => {

    app.post('/api/schedule/add', (req, res) => {
        const newSchedule = new Schedule(req.body)
        let user = { name: 'sg', email: '1@1.c' }
        Object.assign(newSchedule.user, user)
        newSchedule.save((err, data) => {
            if (err) console.log(err)
            res.json(newSchedule)
        })
    });
    app.post('/api/schedule/takeseat', (req, res) => {
        let user = { name: 'sg', email: '1@1.c' }
        Schedule.findOneAndUpdate({ _id: req.body._id, "passengers.email": { $ne: user.email }, "user.email": { $ne: user.email } }, {
            $push: { passengers: user }
        }, (err, d) => {
            if (err) console.log(err)
            res.json(d)
        })

    });
    app.get('/api/schedule/list', (req, res) => {
        Schedule.find({}, (err, schedules) => {
            if (err) console.log(err)
            res.json(schedules)
        })

    });
    app.post('/api/schedule/list', (req, res) => {
        let search = {}
        if (req.body.date != "") Object.assign(search, { date: req.body.date })
        if (req.body.from != "") Object.assign(search, { from: req.body.from })
        if (req.body.to != "") Object.assign(search, { to: req.body.to })
        Schedule.find(search, (err, schedules) => {
            if (err) console.log(err)
            res.json(schedules)
        })

    });

};
