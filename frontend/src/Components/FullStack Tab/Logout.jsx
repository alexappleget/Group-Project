import "../../Stylesheets/Logout.css";
import axios from "axios";

function Logout({ setDeleted }) {
  //function to delete the user data from the database. It'll delete ALL the data, but I don't care because these are just test users. I want to delete ALL so my database doesn't get too flooded with people trying out the example
  const deleteUser = async () => {
    try {
      const res = await axios.post(
        "https://group-project-2rxv.onrender.com/delete"
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  //function to combine deleteUser and to setDeleted to true
  const handleDelete = async () => {
    await deleteUser();
    setDeleted(true);
  };

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
        This feature comes in handy when users no longer want their account and
        wish to remove it. Subscription emails, in some cases, can be
        overwhelming.
      </p>
      <br />
      <p>
        Let's instruct the backend database to delete our account. Click the
        button below to remove your account.
      </p>
      <br />
      <button onClick={handleDelete}>Remove Account</button>
      <br />
      <br />
    </>
  );
}

export default Logout;
