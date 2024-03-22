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
      <div className="fields">
        {active === "Home" && <Home />}
        {active === "Frontend" && <Frontend />}
        {active === "Backend" && <Backend />}
        {active === "Text" && <Text />}
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
