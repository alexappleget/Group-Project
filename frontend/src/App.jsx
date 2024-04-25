import { useRef, useState } from "react";
import Contact from "./Components/Contact Tab/Contact.jsx";
import FullStack from "./Components/FullStack Tab/FullStack.jsx";
import Backend from "./Components/Backend Tab/Backend.jsx";
import Frontend from "./Components/Frontend Tab/Frontend.jsx";
import Where from "./Components/Where.jsx";
import Home from "./Components/Home.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  const [active, setActive] = useState("Home");
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_menu");
  };

  return (
    <div className="app">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="navbar" ref={navRef}>
        <button
          className={active === "Home" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("Home");
            showNavbar();
          }}
        >
          Home
        </button>
        <button
          className={active === "Where" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("Where");
            showNavbar();
          }}
        >
          Where Do I <br /> Start?
        </button>
        <button
          className={active === "Frontend" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("Frontend");
            showNavbar();
          }}
        >
          Frontend
          <br />
          Dev
        </button>
        <button
          className={active === "Backend" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("Backend");
            showNavbar();
          }}
        >
          Backend
          <br />
          Dev
        </button>
        <button
          className={active === "FullStack" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("FullStack");
            showNavbar();
          }}
        >
          Full
          <br />
          Stack
        </button>
        <button
          className={active === "Contact" ? "btn-active" : "navBtn"}
          onClick={() => {
            setActive("Contact");
            showNavbar();
          }}
        >
          Contact
          <br />
          Us
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="fields">
        {active === "Home" && <Home />}
        {active === "Where" && <Where />}
        {active === "Frontend" && <Frontend />}
        {active === "Backend" && <Backend />}
        {active === "FullStack" && <FullStack />}
        {active === "Contact" && <Contact />}
      </div>
    </div>
  );
}
