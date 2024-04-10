import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Deleted from "./Deleted";
import "../Stylesheets/Examples.css";

function Examples({ setActive }) {
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [deleted, setDeleted] = useState(false);

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
      <input type="text" id="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button onClick={() => setRegister(true)}>Register</button>
      <br />
      <br />
      {register && <Register setLoggedIn={setLoggedIn} />}
      {loggedIn && (
        <Login setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} />
      )}
      {loggedOut && <Logout setDeleted={setDeleted} />}
      {deleted && <Deleted />}
    </div>
  );
}

export default Examples;
