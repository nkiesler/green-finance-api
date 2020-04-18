const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Contact: require('../contacts/contact.model'),
    Newsletter: require('../contacts/newsletter.model'),
    Phonenumber: require('../contacts/phonenumber.model'),
};