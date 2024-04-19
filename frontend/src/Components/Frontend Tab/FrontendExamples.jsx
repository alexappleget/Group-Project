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
        Frontend development was used to create a pop-up screen, allowing for
        the display of additional content without cluttering the main screen.
      </p>
      <br />
      <br />
      <p>
        Another example showcasing the versatility of frontend development is
        its ability to fetch data from third-party websites, enabling the
        integration of external information seamlessly into web applications.
      </p>
      <br />
      <p>
        To fetch data, we use what is known as an API fetcher. The API fetcher I
        commonly use is Axios. You simply code the frontend to fetch data from a
        third-party API website, and then you can display it on the frontend.
        Let's give it a try. Click the button below to fetch a random quote and
        have it displayed.
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
            This text is displayed because the button seems to work. This is
            another cool aspect of frontend development. You can have certain
            things displayed after specific events occur. Additionally, you can
            keep clicking the button to retrieve new quotes. Go ahead and try
            it!
          </p>
          <br />
          <p>
            For more examples of frontend development, feel free to explore this
            website. Everything you see here is a result of frontend
            development.
          </p>
        </>
      )}
      <button onClick={() => setActive(false)}>Close</button>
    </div>
  );
}

export default FrontendExamples;
