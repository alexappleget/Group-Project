import { useState } from "react";
import "../Stylesheets/Backend.css";

function Backend() {
  const [active, setActive] = useState(false);

  return (
    <div className="backend-content">
      <h1>You Chose Backend!</h1>
      <br />
      <p>
        Backend development is like diving into the engine room of digital
        platforms, where the real magic happens behind the scenes. It's all
        about building the guts of websites and apps, making sure they run
        smoothly and securely. Developers get to tackle puzzles, figuring out
        how to handle data, manage user accounts, and keep everything running
        fast and stable. There's a real satisfaction in crafting these systems,
        knowing that you're making the foundation strong for everything users
        see and interact with on the frontend. It's a blend of creativity and
        logic, where every line of code contributes to a bigger, functional
        whole. In the world of backend development, there's always something new
        to learn and conquer, and that's what makes it so fun and rewarding.
      </p>
      <br />
      <p>
        For learning backend, I would first start with the beginner roadmap and
        then move on to the more advanced once. Again, take things one at a time
        to not risk being overwhelmed.
      </p>
      <br />
      <p className="backend-p">
        Want to learn a bit more about what backend can do before diving in?
        Click the button below!
      </p>
      <button onClick={() => setActive(true)}>Click Here!</button>
      <br />
      <ul className="backendList">
        <li>
          Beginner Backend Roadmap:
          <a href="https://roadmap.sh/backend?r=backend-beginner">
            https://roadmap.sh/backend?r=backend-beginner
          </a>
        </li>
        <li>
          Advanced Backend Roadmap:
          <a href="https://roadmap.sh/backend">https://roadmap.sh/backend</a>
        </li>
      </ul>
      <br />

      {active && (
        <div className="backend-active">
          <h1>Excellent!</h1>
          <p>
            Since backend is what goes on "behind the scenes", I can't really
            show you anything visible. Instead, I will tell you what backend is
            capable of.
          </p>
          <br />
          <h2>Database:</h2>
          <p>
            Backend can create a database. A database is something you can store
            information. For example, when you create an account on a website.
            When you register, your information goes into that websites database
            to be stored. That way whenever you go to log in, the website scans
            the database and sees that the username and password match what is
            in their database. Then allows you to log in.
          </p>
          <br />
          <p>
            Another example where a database comes into play is when you
            subscribe to emails. Have you ever entered your email and then
            gotten coupons or newsletters? That is the work of a database. The
            database will be able to save your email. Then, depending on the
            company time, will go through the database to send out a newsletter
            to all the emails in the database.
          </p>
          <br />
          <h2>Nodemailer:</h2>
          <p>
            Nodemailer is my personal favorite. It is a backend tool that you
            can program to send an email to someone. Let's say you want to pay
            for a service and then have a confirmation sent to your email. On a
            website, you would normally put your name, email, and anything else
            needed. Then when you click 'Confirm', you get a confirmation email
            from the company. With nodemailer, you can customize what the email
            says and have it set up to where that email format will be sent to
            whatever email the user inputs.
          </p>
          <br />
          <p>
            These are just a few examples. I won't go too in-depth and cause
            confusion. If this peeks your interest, get started on the beginner
            roadmap and you will soon realize that possibilities are endless!
          </p>
          <button onClick={() => setActive(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Backend;
