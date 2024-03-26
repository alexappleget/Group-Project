const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

//The origin is where the website will be running. This is to basically tell the backend that it is okay to let the website interact with it.
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodeMailer.createTransport({
  host: EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post("/contact-us", async (req, res) => {
  //this will be used in the frontend to be able to take whatever email they input to send the email to them
  const { recipientEmail } = req.body;

  //this is what the email will look like
  const html = `
  <h3>Hello User,</h3>
  <br />
  <p>Thank you for reaching out to us! After reviewing your message, we will get back to you shortly.</p>
  <br />
  <p>Sincerely,</p>
  <br />
  <p>The Dev Team</p>
  `;

  //what the user will see in their inbox
  try {
    const info = await transporter.sendMail({
      from: "Dev Team <noreplytravelprojectemail@gmail.com",
      to: recipientEmail,
      subjust: "Thanks for reaching out!",
      html: html,
    });

    console.log("Message sent:" + info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

//to let us know that the backend is working and listening for a response on the frontend
app.listen(5174, () => {
  console.log("Server is running on port 5174");
});
