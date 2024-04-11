const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dataconnect");

//middleware
app.use(cors());
app.use(express.json());

//Code that will take whatever a user inputs into the contact form, and send it to our database to look at
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

//Code used to for the registering example. It'll take the inputted values to save into the table
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

//Code to delete the data from the data table
app.post("/delete", async (req, res) => {
  try {
    const deleteUser = await pool.query("DELETE FROM testdata");
    res.json(deleteUser.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(5175, () => {
  console.log("Server has started on port 5175");
});
