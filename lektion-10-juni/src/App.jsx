import "./App.css";
import { Suspense } from "react";

import Quote from "./components/Quote/Quote";

function App() {
  return (
    <main>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Quote />
      </Suspense>
    </main>
  );
}

export default App;
