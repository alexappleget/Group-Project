import { useState } from "react";
import "../../Stylesheets/Register.css";
import axios from "axios";

function Register({ setLoggedIn, errorMessage, setErrorMessage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const body = { username, password };
      const res = await axios.post(
        "https://group-project-2rxv.onrender.com/login",
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
      setLoggedIn(true);
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <p className="register-text">
        Great job! This message is to show you that you successfully registered
        your account.
      </p>
      <br />
      <p>
        Now let's explain a little of what happened. When you entered the
        username and password, then clicked 'Register', the information got
        added into my database. Now whenever you go to log in, below, the
        information you entered will be checked and if it matches up exactly
        with what is in the database, then you will be logged in.
      </p>
      <br />
      <p>
        Now, let's go ahead and give it a try. Now that you have a username of
        'test' and a password of 'password123', go ahead and use that info to
        log in.
      </p>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default Register;
