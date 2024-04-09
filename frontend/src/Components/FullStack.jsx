import { useState } from "react";
import "../Stylesheets/FullStack.css";
import Examples from "./Examples";

function FullStack() {
  const [active, setActive] = useState(false);

  return (
    <div className="fullstack-content">
      <h1>You Chose Full Stack!</h1>
      <br />
      <p>
        Full Stack is personally my favorite. It let's you build the cool
        looking frontend, and also the backend for it as well. It let's you
        understand things from both perspectives and makes you a valuable asset
        for companies.
      </p>
      <br />
      <p>
        Fullstack development is like embarking on an exciting journey where
        creativity and problem-solving go hand in hand. It's a mix of creating
        cool user interfaces on the front end and building solid systems on the
        back end. Designing sleek layouts with HTML, CSS, and JavaScript feels
        like painting, while diving into databases and server-side logic is like
        solving puzzles. The versatility of fullstack development means there's
        always something new to learn and explore, with a range of technologies
        and frameworks to play with. From brainstorming ideas to seeing them
        come to life, fullstack development is not just rewarding—it's a lot of
        fun too, as every line of code brings the promise of creating something
        awesome.
      </p>
      <br />
      <p>
        If you would like to see more examples of Full Stack at work, go ahead
        and click the button below!
      </p>
      <button onClick={() => setActive(true)}>Click Here!</button>
      {active && <Examples setActive={setActive} />}
      <br />
      <br />
      <p>
        For learning fullstack, I will provide a few roadmaps to follow. But, I
        want you to follow this timeline to help you learn.
      </p>
      <br />
      <p>
        NOTE: It will be a lot and can easily overwhelm. AGAIN, take things one
        at a time and I promise you will get through it. Learn the topic and
        understand it before moving on.
      </p>
      <br />
      <br />
      <p>1. Start off by learning Frontend. Learn HTML and CSS first.</p>
      <br />
      <br />
      <p>2. Move on to learn Javascript fundamentals here: (link)</p>
      <br />
      <br />
      <p>
        3. Once you have gone through the JS roadmap. Go through this React
        roadmap
        <br />
        to learn the React frontend framework: (link)
      </p>
      <br />
      <br />
      <p>
        4. After you learn enough React, go ahead and learn about how to setup a
        backend on your React project.
        <br />
        The most recommended is node.js and express.js.
      </p>
      <br />
      <br />
      <p>
        5. Once you've accomplished setting up a backend on your React, put it
        aside and dive into learning Axios.
        <br />
        Axios is basically a tool you can use on your frontend to grab things
        from your backend to work with.
      </p>
      <br />
      <br />
      <p>
        6. After learning axios in React, I would now start learning about
        databases. I recommend learning PostgreSQL as it works
        <br />
        well with React and is one of the most popular databases. Check out this
        youtube video to get started: (link)
      </p>
    </div>
  );
}

export default FullStack;
