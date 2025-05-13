import { useState, useTransition, Suspense } from "react";

import SlowComponent from "../components/SlowComponent";

function LoadComponent() {
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      setShow(true);
    });
  }

  return (
    <section>
      <h1>Komponent som laddar in en annan komponent med laddningssymbol</h1>
      <button onClick={handleClick}>
        {isPending ? "Laddar..." : "Ladda in komponent"}
      </button>

      {show && (
        <Suspense fallback={<h2>Laddar komponent...</h2>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
}

export default LoadComponent;
