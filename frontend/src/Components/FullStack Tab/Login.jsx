import "../../Stylesheets/Login.css";

function Login({ setLoggedIn, setLoggedOut, setErrorMessage, setActive }) {
  function LoggingOut() {
    setLoggedIn(false);
    setLoggedOut(true);
    setActive(true);
    setErrorMessage("");
  }

  return (
    <div className="loggedIn-div">
      <h1>Success!</h1>
      <p>
        This is to show that you are logged in. Isn't it amazing how things work
        in programming? This is how things are done on most websites.
      </p>
      <br />
      <p>
        IF and ONLY IF you are a registered user and logged in, then are you
        able to see this log in screen. It is how websites keep things secret to
        outside users who don't log in.
      </p>
      <br />
      <p>
        Now that we were able to see how this happens. Let's go ahead and log
        back out and move on to the next example.
      </p>
      <button onClick={LoggingOut}>Log Out</button>
    </div>
  );
}

export default Login;
