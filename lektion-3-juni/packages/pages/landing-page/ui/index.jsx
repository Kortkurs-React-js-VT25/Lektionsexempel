import "./index.css";
import { useState } from "react";

import { Button } from "@jokeApp/button";
import { useData } from "../data";

function LandingPage() {
  const [quote, setQuote] = useState(null);
  const { fetchQuote } = useData();

  async function handleFetchQuote() {
    const data = await fetchQuote();
    setQuote(data);
  }

  return (
    <main className="landing-page">
      <h1 className="landing-page__quote">{quote?.value}</h1>
      <Button
        type="regular"
        onClick={handleFetchQuote}
        text="Fetch a quote"
      ></Button>
    </main>
  );
}

export { LandingPage };
