const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Google App Password
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const emailContent = (token) => {
  return `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
    Please click on the following link, or paste this into your browser to complete the process:\n\n
    ${process.env.FRONTEND_URL}/reset-password/${token}\n\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n`;
};

module.exports = { sendEmail, emailContent };
