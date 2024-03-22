const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5174; //port it'll be running on

//The origin is where the website will be running. This is to basically tell the backend that it is okay to let the website interact with it.
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const transporter = nodeMailer.createTransport({
  host: "###", //what email account do we want to use?
  port: 123, //whatever port the email domain specifies
  secure: true,
  auth: {
    user: "ouremail@email.com",
    pass: "password",
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
      from: "Dev Team <ouremail@email.com",
      to: recipientEmail,
      subjust: "Thanks for reaching out!",
      html: html,
    });
  } catch (err) {
    console.error(err);
  }
});

//to let us know that the backend is working and listening for a response on the frontend
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
