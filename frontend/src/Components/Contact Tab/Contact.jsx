import axios from "axios";
import { useEffect, useState } from "react";
import "../../Stylesheets/Contact.css";

export default function Contact() {
  //this is grabbing the value of the user's email they input and is also used to get the email data
  const [email, setEmail] = useState("");
  //to help confirm the user the email was sent
  const [emailSent, setEmailSent] = useState(false);
  //used to grab the data
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //to have the confirmation text disappear after some time
  const [isVisible, setIsVisible] = useState(emailSent);

  useEffect(() => {
    if (emailSent) {
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [emailSent]);

  //User Data
  const handleUser = async () => {
    try {
      const body = { name, email, message };
      const res = await axios.post("http://localhost:5174/users", body, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  //function that sends the email to them
  const handleEmail = async () => {
    try {
      await axios.post("http://localhost:5174/contact-us", {
        recipientEmail: email, //remember recipientEmail on the backend? the value of 'email' will be what they input and be used as 'recipientEmail' on backend and be sent to it specifically
      });
      setEmailSent(true); //when user clicks the button itll set 'emailSent' to true and render words
    } catch (err) {
      console.error(err);
    }
  };

  //function to send email and data to database
  const handleClick = async () => {
    //using await because i want the data to send before moving to next function
    await handleUser();
    handleEmail();
  };

  return (
    <div className="contact-content">
      <h1>Contact Us</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="example@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        placeholder="I really need help..."
        maxLength="255"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={handleClick}>Contact Us</button>

      {/* what will be shown once the email gets sent */}
      {isVisible && (
        <p>
          We sent you a confirmation email! Thank you for reaching out to us.
        </p>
      )}
    </div>
  );
}
