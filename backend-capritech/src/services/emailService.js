
require('dotenv').config();
const nodemailer = require('nodemailer');
const { createLog } = require('../functions/log');


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465', 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, 
  },
});

/**
 
 * @param {string} to 
 * @param {string} subject 
 * @param {string} text
 * @param {string} html 
 */
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
    });
    console.log(`Correo enviado correctamente a ${to} - ID: ${info.messageId}`);
    return info;
  } catch (error) {
    await createLog(error);
    throw error;
  }
};

module.exports = {
  sendEmail,
};
