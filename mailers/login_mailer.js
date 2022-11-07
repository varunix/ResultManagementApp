const nodeMailer = require('../configs/nodemailer');
require('dotenv').config();

module.exports.mailOptions = (user)=>{
    nodeMailer.sendMail({
        from: "varunchaubey4@gmail.com",
        to: user,
        subject: "You've just logged in to the result management app!",
        text: process.env.MAIL_TEXT
    }, (err, info)=>{
        if(err) {
            console.log(err);
            return;
        }
        else {
            console.log("Mail sent successfully", info);
            return;
        }
    });
}