const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishSchema = new Schema({
    pname: {type:string},
    seat: {type: number},
    dcity:{type: string},
    ddate:{type: Date},
    acity:{type: string},
    adate:{type:Date},
    atime:{type:time}
    // date: { type: Date, default: Date.now},
    // avalaibleSeat: { type: Number, defualt: 0 },
    // from: {type: String },
    // to: {type: String },
    // status: { type: String, enum: ['INACTIVE', 'ACTIVE'], default: ['ACTIVE'] }
});

mongoose.model('wishes', wishSchema);