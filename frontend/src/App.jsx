import { useState } from "react";
import Contact from "./Components/Contact.jsx";
import Backend from "./Components/Backend.jsx";
import Frontend from "./Components/Frontend.jsx";
import Where from "./Components/Where.jsx";
import Home from "./Components/Home.jsx";

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
          className={active === "Where" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Where")}
        >
          Where Do I <br /> Start?
        </button>
        <button
          className={active === "Frontend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Frontend")}
        >
          Frontend
          <br />
          Dev
        </button>
        <button
          className={active === "Backend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Backend")}
        >
          Backend
          <br />
          Dev
        </button>
        <button
          className={active === "Contact" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Contact")}
        >
          Contact
          <br />
          Us
        </button>
      </div>
      <div className="fields">
        {active === "Home" && <Home />}
        {active === "Where" && <Where />}
        {active === "Frontend" && <Frontend />}
        {active === "Backend" && <Backend />}
        {active === "Contact" && <Contact />}
      </div>
    </div>
  );
}
