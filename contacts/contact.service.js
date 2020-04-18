const db = require('_helpers/db');
const Contact = db.Contact;
const Newsletter = db.Newsletter;
const Phonenumber = db.Phonenumber;
var MailConfig = require('../config/email');
var transporter = MailConfig.transporter;
const ejs = require("ejs");

module.exports = {
    add,
    subscribe,
    addPhoneNumber
};

async function add(req) {

	let name = req.name;
	let email = req.email;
	let message = req.message;

	ejs.renderFile(__dirname + "/contact.ejs", { name: name, email: email, message: message }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {
            from: '"Blau" <freearmy314@gmail.com>',
            to: process.env.CONTACT_MAIL,
            subject: 'New contact request',
            html: data
        };

        transporter.sendMail(mainOptions, function (err, info) {
          if (err) {
          	let message = {
              sucess: false
            }
            return message
          } else {
            message = {
              sucess: true
            }
            return message
          }
      });
      }
  });

}

async function subscribe(req) {

  if (await Newsletter.findOne({ email: req.email })) {
      return {
          error: true,
          message: '' + req.email + ' has been already subscribed'
      }
  }

  const data = new Newsletter(req);

  await data.save();

  return {
      data
  };
}

async function addPhoneNumber(req) {

  const data = new Phonenumber(req);

  await data.save();

  return {
    success: true,
    data: data
  };
}