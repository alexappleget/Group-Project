import React from "react";
import "../Stylesheets/Frontend.css";

function Frontend() {
  return (
    <div className="frontend-content">
      <h1>Start your journey from Frontend Development!</h1>
      <div className="QandAContainer">
        <h3>What is Frontend Development?</h3>
        <h5>
          Frontend development is all about creating the parts of a website that
          users see and interact with. It's like the storefront of a web
          business! <br /> Frontend developers use code to make websites
          visually appealing, user-friendly, and functional on different
          devices.
        </h5>
        <h3>Why Frontend Development?</h3>
        <h5>
          Being a frontend developer is a creative and in-demand career path.
          <br /> You get to combine your artistic side with problem-solving
          skills to build beautiful and interactive web experiences.
        </h5>
      </div>
      <div className="gettingStarted">
        <h3>Getting Started with Frontend Development</h3>
        <h5>
          The three main ingredients for frontend development are HTML, CSS, and
          JavaScript. <br /> HTML provides the structure and content of a
          webpage, like the foundation and walls of a house. <br /> CSS handles
          the styling and visual design, like the paint, furniture, and overall
          look of the house. <br /> JavaScript makes webpages interactive,
          adding things like animations, forms, and games - like the smart
          lights and doorbell of a house!
        </h5>
      </div>
    </div>
  );
}

export default Frontend;
