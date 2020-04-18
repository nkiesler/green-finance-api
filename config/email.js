const nodemailer = require('nodemailer')
let environment = process.env;


const transport = {
  host: environment.GMAIL_SERVICE_HOST,
  port: environment.GMAIL_SERVICE_PORT,
  secure: environment.GMAIL_SERVICE_SECURE,
  auth: {
    user: environment.GMAIL_USER_NAME,
    pass: environment.GMAIL_USER_PASSWORD
  }
};

module.exports.transporter = nodemailer.createTransport(transport);



