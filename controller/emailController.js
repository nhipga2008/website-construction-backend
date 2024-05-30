const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "trieuminhkha8@gmail.com",
      pass: "bwdbxlzuvfpaiodh"

    },
  });


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'catvy0612@gmail.com', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

});

module.exports = sendEmail;