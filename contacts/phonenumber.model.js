const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    phoneNumber: { type:String, required:true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Phonenumber', schema);