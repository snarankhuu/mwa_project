const mongoose = require('mongoose');
const { Schema } = mongoose;

const whishSchema = new Schema({
    date: { type: Date, default: Date.now},
    avalaibleSeat: { type: Number, defualt: 0 },
    from: {type: String },
    to: {type: String },
    status: { type: String, enum: ['INACTIVE', 'ACTIVE'], default: ['ACTIVE'] }
});

mongoose.model('whishes', whishSchema);