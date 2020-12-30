const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d5f0641f664446",
      pass: "6703329dfa3253"
    }
  });

