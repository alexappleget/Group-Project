function Deleted() {
  return (
    <>
      <h1>Success!</h1>
      <br />
      <p>
        The account was successfully removed. What happened was that after
        clicking the button, the system accessed the database and instructed it
        to delete the data associated with the account.
      </p>
      <br />
      <p>
        In case you haven't realized, this is also how companies can add new
        employees to their system applications. Have you ever gone through
        training with a company and received a login and temporary password?
        This is the work of a secure database. Companies prioritize privacy, so
        they only allow access to their applications for employees with created
        usernames.
      </p>
      <br />
      <p>
        A company will often have a specific admin who can add and delete users
        to ensure extra safety and security measures are in place.
      </p>
      {/* <br />
      <h2>
        (NOTE: When you click 'Close' to close out of this, you may get a pop-up
        from google about a data breach. It is just referring to the test
        username and password you made for the above example. Just click 'Ok'
        when it pops and click 'Never' for saving the information.)
      </h2> */}
    </>
  );
}

export default Deleted;
