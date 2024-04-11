import { useState } from "react";
import "../../Stylesheets/Frontend.css";
import FrontendExamples from "./FrontendExamples";

function Frontend() {
  const [active, setActive] = useState(false);

  return (
    <div className="frontend-content">
      <h1>You Chose Frontend!</h1>
      <br />
      <p>
        Frontend development is a blast! It's like being an artist with a
        computer. Instead of paint and canvas, we use code and design tools to
        build awesome websites and apps. Every line of code feels like solving a
        puzzle, and seeing your creations come to life on the screen is
        incredibly rewarding. Plus, there's always something new to learn,
        whether it's cool animations, making things load faster, or making sure
        everything looks great on different devices. It's a perfect mix of
        creativity and problem-solving that keeps things exciting and fun!
      </p>
      <br />
      <p>
        In order to learn frontend, you must first start by learning HTML and
        CSS. Once you have tackled that, Javascript is your next task. Learn
        basic HTML and CSS first before diving deeper into Javascript. When you
        start to get into javascript, it is definitely a lot to learn and can be
        overwhelming if you take too much on at once. Just take things one at a
        time and don't move on until you understand everything. If you keep
        moving on and you're still a little confused about something, it'll keep
        piling on and get worse.
      </p>
      <br />
      <p>
        Below is a timeline for you to follow to help you on your journey to
        becoming a developer. This timeline will include links to developer
        roadmaps to follow, so you don't get lost. Go through the Frontend
        Beginner Roadmap first. Learn HTML and then CSS. Once you get familiar
        with it, move on to the javascript roadmap. The javascript roadmap is A
        LOT to take in and can be overwhelming, but just take it one thing at a
        time. Once you have finished the javascript roadmap, go back to the
        frontend beginner roadmap and continue on down the path. Once you get to
        frameworks, go ahead and start your journey learning React! Believe it
        or not, this web app was actually built using React. React is the most
        popular to learn and can do many things. Go ahead and get started
        learning! If you feel lost, please go to the 'Contact Us' page and reach
        out.
      </p>
      <br />
      <ul className="frontendList">
        <li>
          Beginner Frontend Roadmap:
          <a href="https://roadmap.sh/frontend?r=frontend-beginner">
            https://roadmap.sh/frontend?r=frontend-beginner
          </a>
        </li>
        <li>
          Javascript Roadmap:
          <a href="https://roadmap.sh/javascript">
            https://roadmap.sh/javascript
          </a>
        </li>
        <li>
          React Roadmap:
          <a href="https://roadmap.sh/react">https://roadmap.sh/react</a>
        </li>
      </ul>
      <br />
      <p className="frontend-p">
        Want to see more examples of frontend and what it can do? Click the
        button below!
      </p>
      <button onClick={() => setActive(true)}>Click Here!</button>
      {active && <FrontendExamples setActive={setActive} />}
    </div>
  );
}

export default Frontend;
