const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishSchema = new Schema({
    pname: { type: String },
    seat:  { type: Number },
    dcity: { type: String },
    ddate: { type: Date },
    acity: { type: String },
    adate: { type: Date },
    atime: { type: String }
    // date: { type: Date, default: Date.now},
    // avalaibleSeat: { type: Number, defualt: 0 },
    // from: {type: String },
    // to: {type: String },
    // status: { type: String, enum: ['INACTIVE', 'ACTIVE'], default: ['ACTIVE'] }
});

mongoose.model('wishes', wishSchema);