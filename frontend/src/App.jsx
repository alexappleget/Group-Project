import { useState } from "react";
import Contact from "./Components/Contact";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="app">
      <div className="navbar">
        <button
          className={active === "Home" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Home")}
        >
          Home
        </button>
        <button
          className={active === "Frontend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Frontend")}
        >
          Frontend Dev
        </button>
        <button
          className={active === "Backend" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Backend")}
        >
          Backend Dev
        </button>
        <button
          className={active === "Text" ? "btn-active" : "navBtn"}
          onClick={() => setActive("Text")}
        >
          Text
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
        <h3>Hello World</h3>
      </div>
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
