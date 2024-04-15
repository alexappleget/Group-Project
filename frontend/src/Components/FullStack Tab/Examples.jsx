import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Deleted from "./Deleted";
import "../../Stylesheets/Examples.css";
import axios from "axios";

function Examples({ setActive }) {
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [deleted, setDeleted] = useState(false);

  //used for the PostgreSQL to acquire the data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //to be drilled into different components
  const [errorMessage, setErrorMessage] = useState("");

  //function to send the inputed text to the database
  const handleRegister = async () => {
    try {
      const body = { username, password };
      const res = await axios.post(
        `${import.meta.env.VERCEL_BACKEND_URL}/testregister`,
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  //function to combine handleRegister and to setRegister to true
  const handleClick = async () => {
    //i am using await because i want the data to be sent to the database before executing next function
    await handleRegister();
    setRegister(true);
  };

  return (
    <div className="fullstack-active">
      <h1>Excellent!</h1>
      <p>
        With Full Stack, I can explain the backend and be able to show you how
        it would work on the frontend.
      </p>
      <br />
      <p>
        For starters, how you ever had an account on a website that required you
        to log in or register an account to be able to log in?
      </p>
      <br />
      <p>
        Go ahead and pretend you are creating an account on a website. Go ahead
        and use 'Test' for the username and then use 'Password123' for the
        password. Then click 'Register'.
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
      {/* button for testdata sql for registering */}
      <button onClick={handleClick}>Register</button>
      <br />
      <br />
      {register && (
        <Register
          setLoggedIn={setLoggedIn}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
      {loggedIn && (
        <Login
          setLoggedIn={setLoggedIn}
          setLoggedOut={setLoggedOut}
          setErrorMessage={setErrorMessage}
        />
      )}
      {loggedOut && <Logout setDeleted={setDeleted} />}
      {deleted && <Deleted />}
      <br />
      <button onClick={() => setActive(false)}>Close</button>
    </div>
  );
}

export default Examples;
