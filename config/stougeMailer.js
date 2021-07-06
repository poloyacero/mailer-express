const nodemailer = require('nodemailer');

const emailService = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    requireTLS: process.env.EMAIL_REQUIRETLS,
    auth:
        {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
});

emailService.verify((error, success) => {
    if (error) {
        console.log(error);
   } else {
        console.log('Stouge Mailer is ready to take messages,', success);
   }
})

module.exports = emailService;