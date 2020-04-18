const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    hash: { type: String, required: true },
    email: { type:String, unique: true, required:true },
    passport: { type:String },
    email: { type:String, unique: true, required:true },
    country: { type:String, required:true },
    city: { type:String, required:true },
    address: { type:String, required:true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);