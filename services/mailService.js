const mailer = require('../config/mailer');
const stougeMailer = require('../config/stougeMailer');

const mailListNoLimit = [
  'gb@nolimitsolution.dk',
  'js@nolimitsolution.dk',
  'akosipoloyacero@gmail.com'
];

const mailListStouge = [
  'jens@stouge.dk'
];

const nlsMailService = async (body) => {
  const htmlMessage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <p>First Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Message: ${body.message}</p>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `No Limit Solutions <${process.env.EMAIL_USERNAME}>`,
    sender: body.email,
    to: mailListNoLimit,
    replyTo: body.email,
    subject: 'Client Enquiry',
    text: 'Client needs assistance',
    html: htmlMessage
  }

  return await mailer.sendMail(mailOptions);
}

const stougeMailService = async (body) => {
  const htmlMessage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <p>First Name: ${body.firstname}</p>
        <p>Last Name: ${body.lastname}</p>
        <p>Email: ${body.email}</p>
        <p>Institution: ${body.institution}</p>
        <p>Phone: ${body.phone}</p>
        <p>Position: ${body.position}</p>
        <p>Message: ${body.message}</p>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `Stouge & Co. <${process.env.EMAIL_USERNAME}>`,
    sender: body.email,
    to: mailListStouge,
    replyTo: body.email,
    subject: 'Client Enquiry',
    text: 'Client needs assistance',
    html: htmlMessage
  }

  return await mailer.sendMail(mailOptions);
}

module.exports = {
  nlsMailService,
  stougeMailService
}