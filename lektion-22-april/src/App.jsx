import "./App.css";

import Job from "./components/Job";

function isReactFun() {
  return "Oh yeah!";
}

function App() {
  const name = "Christoffer";

  return (
    <main>
      <h1>Välkommen, {name}!</h1>
      <Job />

      <p>{isReactFun()}</p>
    </main>
  );
}

export default App;
