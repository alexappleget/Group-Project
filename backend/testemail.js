const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: import.meta.VITE_API_BASE_URL,
  })
);
app.use(express.json());

const transporter = nodeMailer.createTransport({
  host: import.meta.EMAIL_HOST,
  port: import.meta.EMAIL_PORT,
  secure: true,
  auth: {
    user: import.meta.EMAIL_USER,
    pass: import.meta.EMAIL_PASS,
  },
});

app.post("/test-email", async (req, res) => {
  //this will be used in the frontend to be able to take whatever email they input to send the email to them
  const { recipientEmail } = req.body;

  //this is what the email will look like
  const html = `
  <h3>Look at that!</h3>
  <br />
  <p>Isn't it cool that you can do something like this as a programmer?</p>
  <br />
  <p>Now that you have a little taste of what frontend, backend, and fullstack are, which one do you like most? Once you've decided, head back to the website and the tabs, in the top right, to learn about them more in-depth. See more examples and how to get started!</p>
  `;

  //what the user will see in their inbox
  try {
    const info = await transporter.sendMail({
      from: "Test <noreplytravelprojectemail@gmail.com",
      to: recipientEmail,
      subject: "Hey!",
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
app.listen(5176, () => {
  console.log("Server is running on port 5176");
});
