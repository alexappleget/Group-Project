import axios from "axios";
import { useState } from "react";
import "../Stylesheets/Contact.css";

export default function Contact() {
  //this is grabbing the value of the user's email they input
  const [email, setEmail] = useState("");
  //to help confirm the user the email was sent
  const [emailSent, setEmailSent] = useState(false);

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

  return (
    <div className="contact-content">
      <h1>Contact Us</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Full Name" />
      <label htmlFor="email">Email:</label>
      {/* will update the value of email based on what they input */}
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
      ></textarea>
      <button onClick={handleEmail}>Contact Us</button>

      {/* what will be shown once the email gets sent */}
      {emailSent && (
        <p>
          We sent you a confirmation email! Thank you for reaching out to us.
        </p>
      )}
    </div>
  );
}
