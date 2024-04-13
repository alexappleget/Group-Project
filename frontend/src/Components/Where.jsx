import React, { useState } from "react";
import "../Stylesheets/Where.css";
import axios from "axios";

function Where() {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = async () => {
    try {
      await axios.post("http://localhost:5174/test-email", {
        recipientEmail: email,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmail = async () => {
    await sendEmail();
    setEmailSent(true);
  };

  return (
    <div className="where-content">
      <h1>Where Can I Start?</h1>
      <p>
        Before we dive into that, let me explain to you the different types of
        programming. It's best to learn what each one does, and then decide from
        there. That way you know what you are getting into.
      </p>
      <div className="whereFrontend-content">
        <h3>Frontend</h3>
        <p>
          The frontend is what your users see and includes visual elements like
          buttons, checkboxes, graphics, and text messages. It allows your users
          to interact with your application. Some other examples are this entire
          website. Everything you interact with to navigate around and click, is
          all frontend. Go ahead and check out the button below to get a little
          taste of what frontend can do!
        </p>
        <button className="clickExample-btn" onClick={() => setClicked(true)}>
          Click Me!
        </button>
        {clicked && (
          <div className="example-div">
            <p>
              Look what frontend can do! With just a click of a button, you can
              create a pop-up window right here on the same page. Now go ahead
              and click the button below to close the window and then move on to
              learn about backend. There aren't any examples to show because
              backend isn't anything visual to be seen. In order to visually see
              examples of backend, that will tie into fullstack. Go ahead and
              learn about full stack below!
            </p>
            <button onClick={() => setClicked(false)}>Close</button>
          </div>
        )}
      </div>
      <div className="whereBackend-content">
        <h3>Backend</h3>
        <p>
          The backend is the data and infrastructure that make your application
          work. It stores and processes application data for your users. Some
          examples are if you want to store customer information, send
          confirmation emails to clients, or anything that you think goes on
          "behind the scenes".
        </p>
      </div>
      <br />
      <div className="whereFullStack-content">
        <h3>Full Stack</h3>
        <p>
          Full Stack is a mix of both the frontend and the backend. Try out the
          example below by inputing your email and hitting 'Send'. Then you will
          receive an email. This is full stack! You build the backend part to
          send an email and then build the frontend. The frontend provides the
          input field, for you to enter in your email, and then the button to
          click that will send the email. Go ahead and give it a try! Input your
          email and click send!
        </p>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handleEmail}>Send Email</button>
        <br />
        <br />
        {emailSent && (
          <p style={{ color: "#abdb2a" }}>Email Successfully Sent!</p>
        )}
      </div>
    </div>
  );
}

export default Where;
