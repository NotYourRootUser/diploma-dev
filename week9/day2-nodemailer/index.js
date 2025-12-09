import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log("EMAIL:", process.env.EMAIL);
console.log("PASS:", process.env.EMAIL_PASSWORD);


const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL, // access from .env
    pass: process.env.EMAIL_PASSWORD, // access from .env
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: "ewanz@missionreadyhq.com",
  subject: "Here is image",
  html: "<p>Image</p>",
  attachments: [
    {
      filename: "screenshot.png",
      path: "./screenshot.png", // relative to your project
    },
  ],
};


transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Email failed:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
