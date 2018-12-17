const mongoose = require("mongoose");

const Schedule = mongoose.model("schedules");

module.exports = app => {

    app.get('/schedule', async (req, res) => {
        const newSchedule = new Schedule({
            avalaibleSeat: 12,
            from: "fairfield",
            to: "chicago",
        })
        await newSchedule.save((err, data)=>{
            if(err) console.log(err)
            console.log(data)
            res.json(newSchedule)
        })
 
        
    });
    app.get('/schedule/list', (req, res) => {
        Schedule.find({}, (err, schedules)=>{
            if(err) console.log(err)
            console.log(schedules)
            res.json(schedules)
        })
        
    });

};
