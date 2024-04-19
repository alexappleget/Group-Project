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
        Only registered users who are logged in can see this login screen. It's
        how websites keep information secure from users who haven't logged in.
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
