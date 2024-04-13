const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { Pool } = require("pg");

const { FRONTEND_URL } = process.env;

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);
app.use(express.json());

const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_PORT } = process.env;

const transporter = nodeMailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Code for the 'Contact Us' form
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

  // What the user will see in their inbox
  try {
    const info = await transporter.sendMail({
      from: "Dev Team <noreplytravelprojectemail@gmail.com",
      to: recipientEmail,
      subject: "Thanks for reaching out!",
      html: html,
    });

    console.log("Message sent:" + info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

// Code for the test email example
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

// To connect our database

const { SQL_USER, SQL_PASS, SQL_HOST, SQL_PORT, SQL_DATABASE } = process.env;
if (!SQL_USER || !SQL_PASS || !SQL_HOST || !SQL_PORT || !SQL_DATABASE) {
  throw new Error("Incomplete database configuration.");
}

const pool = new Pool({
  user: SQL_USER,
  password: SQL_PASS,
  host: SQL_HOST,
  port: SQL_PORT,
  database: SQL_DATABASE,
  ssl: {
    require: true,
  },
});

// To test the connection to the database
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Successfully connected to the database:", res.rows[0]);
  }
});

module.exports = pool;

// Code that will take whatever a user inputs into the contact form, and send it to our database to look at
app.post("/users", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newUser = await pool.query(
      "INSERT INTO userdata (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// Code used to for the registering example. It'll take the inputted values to save into the table
app.post("/testregister", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newRegister = await pool.query(
      "INSERT INTO testdata (username, password) VALUES ($1, $2)",
      [username, password]
    );
    res.json(newRegister.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// Code used to check the username and password in the database before logging in
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log("Received login request for username:", username);

    const result = await pool.query(
      "SELECT * FROM testdata WHERE username = $1",
      [username]
    );
    console.log("Result from database query:", result.rows);

    if (result.rows.length === 0) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = result.rows[0];

    if (password !== user.password) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid username or password" });
    }

    console.log("Login successful for user:", username);
    return res.status(200).json({ message: "Login Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Code to delete the data from the data table
app.post("/delete", async (req, res) => {
  try {
    const deleteUser = await pool.query("DELETE FROM testdata");
    res.json(deleteUser.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(5175, () => {
  console.log("Server is running on port 5175");
});
