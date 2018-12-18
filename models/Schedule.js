const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    user: {
        name: String,
        email: String
    },
    car: { type: String },
    date: { type: Date, default: Date.now },
    seat: { type: Number, defualt: 0 },
    passengers: [{
        name: String,
        email: String
    }],
    from: { type: String },
    to: { type: String },
    status: { type: String, enum: ['INACTIVE', 'ACTIVE'], default: ['ACTIVE'] }
});

scheduleSchema.virtual('availableseat').get(function () {
    return this.seat - this.passengers.length;
  });
mongoose.model('schedules', scheduleSchema);