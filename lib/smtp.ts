const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_HOST_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});
