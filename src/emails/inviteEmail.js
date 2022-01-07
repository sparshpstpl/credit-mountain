var nodemailer = require('nodemailer');

exports.sendEmailToUsers = async (userEmail, newPassword) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kanakmishraa@gmail.com',
        pass: 'Kanak@2021'
      }
    });

    var mailOptions = {
        from: 'kanakmishraa@gmail.com',
        to: userEmail,
        subject: 'Invitation to join credit mountain!',
        text: `Hi!! 
            Congratulations, Your account has been created.

            Your login is ${userEmail}
            Your password is  ${newPassword}
        `
    };

    return await transporter.sendMail(mailOptions);
}