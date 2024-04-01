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

app.listen(5175, () => {
  console.log("Server has started on port 5175");
});
