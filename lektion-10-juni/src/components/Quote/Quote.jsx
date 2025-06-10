import { use, useState, useEffect } from "react";
import { fetchQuote } from "../../api";

const quotePromise = fetchQuote();

function Quote() {
  const randomQuote = use(quotePromise);

  // Innan vi hade use() i React 19
  //   const [randomQuote, setRandomQuote] = useState({});

  //   useEffect(() => {
  //     async function fetchQuote() {
  //       const response = await fetch("https://api.chucknorris.io/jokes/random");
  //       const data = await response.json();

  //       setRandomQuote(data);
  //     }

  //     fetchQuote();
  //   }, []);

  return (
    <article>
      <h3>{randomQuote?.value}</h3>
      <img src={randomQuote?.icon_url} />
    </article>
  );
}

export default Quote;
