import axios from "axios";
import { useState } from "react";

function FrontendExamples({ setActive }) {
  const [quote, setQuote] = useState("");
  const [nextExample, setNextExample] = useState(false);

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async () => {
    await getQuote();
    setNextExample(true);
  };

  return (
    <div className="frontend-active">
      <h1>Excellent!</h1>
      <p>
        Frontend can do more than just decorate. Frontend was used to pop up
        this screen to be able to show more without having too much on the main
        screen.
      </p>
      <br />
      <br />
      <p>
        Another example to show off what frontend can do is the fact that it can
        be used to fetch data from third party websites.
      </p>
      <br />
      <p>
        To fetch data, we use what is known as an API fetcher. the API fetcher I
        commonly use is Axios. You just code the frontend to fetch data from a
        3rd party API website and then you can display it on the frontend. Let's
        give it a try. Click the button below to fetch a random quote and have
        it displayed.
      </p>
      <br />
      <br />
      <button onClick={handleClick}>Click Me!</button>
      <br />
      <br />
      {quote ? <p>{quote}</p> : null}
      <br />
      {nextExample && (
        <>
          <h3>Awesome!</h3>
          <br />
          <p>
            This text is showing because the button seemed to work. This is
            another cool thing to frontend. You can have certain things display
            after something happens. You can also keep clicking the button to
            get a new quote. Go ahead and try it!
          </p>
          <br />
          <p>
            For more examples of frontend, just play around with this website
            and look around. Everything you see is frontend.
          </p>
        </>
      )}
      <button onClick={() => setActive(false)}>Close</button>
    </div>
  );
}

export default FrontendExamples;
