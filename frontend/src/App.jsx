import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="app">
      <button
        className={active === "Home" ? "btn-active" : ""}
        onClick={() => setActive("Home")}
      >
        Home
      </button>
      <button
        className={active === "Frontend" ? "btn-active" : ""}
        onClick={() => setActive("Frontend")}
      >
        Frontend Dev
      </button>
      <button
        className={active === "Backend" ? "btn-active" : ""}
        onClick={() => setActive("Backend")}
      >
        Backend Dev
      </button>
      <button
        className={active === "Text" ? "btn-active" : ""}
        onClick={() => setActive("Text")}
      >
        Text
      </button>
      <button
        className={active === "Contact" ? "btn-active" : ""}
        onClick={() => setActive("Contact")}
      >
        Contact Us
      </button>
      <div className="fields">
        {active === "Home" && <Home />}
        {active === "Frontend" && <Frontend />}
        {active === "Backend" && <Backend />}
        {active === "Text" && <Text />}
        {active === "Contact" && <Contact />}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-content">
      <h1>This is Home!</h1>
    </div>
  );
}

function Frontend() {
  return (
    <div className="frontend-content">
      <h1>This is Frontend!</h1>
    </div>
  );
}

function Backend() {
  return (
    <div className="backend-content">
      <h1>This is Backend!</h1>
    </div>
  );
}

function Text() {
  return (
    <div className="text-content">
      <h1>This is Text!</h1>
    </div>
  );
}

function Contact() {
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
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        {/* will update the value of email based on what they input */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea id="message" cols="30" rows="10"></textarea>
        <button type="submit">Contact Us</button>
      </form>
      {/* what will be shown once the email gets sent */}
      {emailSent && (
        <p>
          We sent you a confirmation email! Thank you for reaching out to us.
        </p>
      )}
    </div>
  );
}
