import { useState } from "react";
import "../../Stylesheets/Register.css";
import axios from "axios";

function Register({ setLoggedIn, errorMessage, setErrorMessage, setActive }) {
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
      setActive(false);
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <p className="register-text">
        Congratulations! This message confirms that you have successfully
        registered your account.
      </p>
      <br />
      <p>
        Now let's explain a little of what happened. When you entered the
        username and password, then clicked 'Register', the information was
        added to my database. Now, whenever you go to log in below, the
        information you entered will be checked, and if it matches exactly with
        what is in the database, then you will be logged in.
      </p>
      <br />
      <p>
        Now, let's go ahead and give it a try. Use the username 'test' and the
        password 'password123' to log in.
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
