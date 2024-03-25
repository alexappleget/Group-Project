import { useState } from "react";
import Contact from "./Components/Contact.jsx";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="app">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="navbar">
        <button
          className={active === "Home" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Home")}
        >
          Home
        </button>
        <button
          className={active === "About" ? "btn-active" : "navBtn"}
          onClick={() => setActive("About")}
        >
          About
        </button>
        <button
          className={active === "Frontend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Frontend")}
        >
          Where Do I <br /> Start?
        </button>
        <button
          className={active === "Backend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Backend")}
        >
          Backend Dev
        </button>
        <button
          className={active === "Contact" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Contact")}
        >
          Contact Us
        </button>
      </div>
      <div className="fields">
        {active === "Home" && <Home />}
        {active === "About" && <About />}
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
      <h1>PROGRAMMER</h1>
      <div>
        <h3>You Are Never Alone in This Journey</h3>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-content">
      <h1>About Us</h1>
      <div></div> {/* just the green line underneath "About Us" for styling */}
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
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
