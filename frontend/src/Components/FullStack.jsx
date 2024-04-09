import { useState } from "react";
import "../Stylesheets/FullStack.css";

function FullStack() {
  const [active, setActive] = useState(false);
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function LoggingOut() {
    setLoggedIn(false);
    setLoggedOut(true);
  }

  return (
    <div className="fullstack-content">
      <h1>You Chose Full Stack!</h1>
      <br />
      <p>
        Full Stack is personally my favorite. It let's you build the cool
        looking frontend, and also the backend for it as well. It let's you
        understand things from both perspectives and makes you a valuable asset
        for companies.
      </p>
      <br />
      <p>
        Fullstack development is like embarking on an exciting journey where
        creativity and problem-solving go hand in hand. It's a mix of creating
        cool user interfaces on the front end and building solid systems on the
        back end. Designing sleek layouts with HTML, CSS, and JavaScript feels
        like painting, while diving into databases and server-side logic is like
        solving puzzles. The versatility of fullstack development means there's
        always something new to learn and explore, with a range of technologies
        and frameworks to play with. From brainstorming ideas to seeing them
        come to life, fullstack development is not just rewarding—it's a lot of
        fun too, as every line of code brings the promise of creating something
        awesome.
      </p>
      <br />
      <p>
        If you would like to see more examples of Full Stack at work, go ahead
        and click the button below!
      </p>
      <button onClick={() => setActive(true)}>Click Here!</button>
      {active && (
        <div className="fullstack-active">
          <h1>Excellent!</h1>
          <p>
            With Full Stack, I can explain the backend and be able to show you
            how it would work on the frontend.
          </p>
          <br />
          <p>
            For starters, how you ever had an account on a website that required
            you to log in or register an account to be able to log in?
          </p>
          <br />
          <p>
            Go ahead and pretend you are creating an account on a website. Go
            ahead and use 'Test' for the username and then use 'Password123' for
            the password. Then click 'Register'.
          </p>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button onClick={() => setRegister(true)}>Register</button>
          <br />
          <br />
          {register && (
            <>
              <p className="register-text">
                Great job! This message is to show you that you successfully
                registered your account.
              </p>
              <br />
              <p>
                Now let's explain a little of what happened. When you entered
                the username and password, then clicked 'Register', the
                information got added into my database. Now whenever you go to
                log in, below, the information you entered will be checked and
                if it matches up exactly with what is in the database, then you
                will be logged in.
              </p>
              <br />
              <p>
                Now, let's go ahead and give it a try. Now that you have a
                username of 'test' and a password of 'password123', go ahead and
                use that info to log in.
              </p>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
              <button onClick={() => setLoggedIn(true)}>Log In</button>
            </>
          )}
          {loggedIn && (
            <div className="loggedIn-div">
              <h1>Success!</h1>
              <p>
                This is to show that you are logged in. Isn't it amazing how
                things work in programming? This is how things are done on most
                websites.
              </p>
              <br />
              <p>
                IF and ONLY IF you are a registered user and logged in, then are
                you able to see this log in screen. It is how websites keep
                things secret to outside users who don't log in.
              </p>
              <br />
              <p>
                Now that we were able to see how this happens. Let's go ahead
                and log back out and move on to the next example.
              </p>
              <button onClick={LoggingOut}>Log Out</button>
            </div>
          )}
          {loggedOut && (
            <>
              <p className="logout-text">You have successfully logged out!</p>
              <br />
              <p>
                Now that you have logged out, let's move on to the next example
                below.
              </p>
              <br />
              <p>
                For this next example, we are going to delete our registered
                account. This comes in handy when users no longer want thier
                account and wish to remove it. Subscription emails, some places,
                can be too much.
              </p>
              <br />
              <p>
                Let us tell the backend database to delete our account. Click
                the button below to remove your account.
              </p>
              <br />
              <button onClick={() => setDeleted(true)}>Remove Account</button>
              <br />
              <br />
            </>
          )}
          {deleted && (
            <>
              <h1>Success!</h1>
              <br />
              <p>
                The account was successfully removed. What basically happened
                was that after clicking the button, the system went to the
                database and told it to remove the data associated with the
                account.
              </p>
              <br />
              <p>
                In case you haven't realized. This is also how companies can add
                new employees onto their system applications. Ever went through
                training, with a company, and recieved a login and temporary
                password? This is the work of a secure database. The company
                wants to keep things private, so they only allow employees with
                created usernames to access their applications.
              </p>
              <br />
              <p>
                A company will oftentimes have a specific admin who will be able
                to add and delete users to keep things extra safe and secure.
              </p>
            </>
          )}
        </div>
      )}
      <br />
      <br />
      <p>
        For learning fullstack, I will provide a few roadmaps to follow. But, I
        want you to follow this timeline to help you learn.
      </p>
      <br />
      <p>
        NOTE: It will be a lot and can easily overwhelm. AGAIN, take things one
        at a time and I promise you will get through it. Learn the topic and
        understand it before moving on.
      </p>
      <br />
      <br />
      <p>1. Start off by learning Frontend. Learn HTML and CSS first.</p>
      <br />
      <br />
      <p>2. Move on to learn Javascript fundamentals here: (link)</p>
      <br />
      <br />
      <p>
        3. Once you have gone through the JS roadmap. Go through this React
        roadmap
        <br />
        to learn the React frontend framework: (link)
      </p>
      <br />
      <br />
      <p>
        4. After you learn enough React, go ahead and learn about how to setup a
        backend on your React project.
        <br />
        The most recommended is node.js and express.js.
      </p>
      <br />
      <br />
      <p>
        5. Once you've accomplished setting up a backend on your React, put it
        aside and dive into learning Axios.
        <br />
        Axios is basically a tool you can use on your frontend to grab things
        from your backend to work with.
      </p>
      <br />
      <br />
      <p>
        6. After learning axios in React, I would now start learning about
        databases. I recommend learning PostgreSQL as it works
        <br />
        well with React and is one of the most popular databases. Check out this
        youtube video to get started: (link)
      </p>
    </div>
  );
}

export default FullStack;
