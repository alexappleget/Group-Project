import "../Stylesheets/Logout.css";

function Logout({ setDeleted }) {
  return (
    <>
      <p className="logout-text">You have successfully logged out!</p>
      <br />
      <p>
        Now that you have logged out, let's move on to the next example below.
      </p>
      <br />
      <p>
        For this next example, we are going to delete our registered account.
        This comes in handy when users no longer want thier account and wish to
        remove it. Subscription emails, some places, can be too much.
      </p>
      <br />
      <p>
        Let us tell the backend database to delete our account. Click the button
        below to remove your account.
      </p>
      <br />
      <button onClick={() => setDeleted(true)}>Remove Account</button>
      <br />
      <br />
    </>
  );
}

export default Logout;
