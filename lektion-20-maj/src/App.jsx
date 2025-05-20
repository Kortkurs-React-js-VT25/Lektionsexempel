import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateUsername, updateEmail } from "./reducers/userReducer";
import "./App.css";

import DisplayUser from "./components/DisplayUser";

function App() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const username = useRef();
  const email = useRef();

  function handleClick() {
    console.log(username.current.value);
    console.log(email.current.value);

    if (username) {
      dispatch(updateUsername(username.current.value));
    }

    if (email) {
      dispatch(updateEmail(email.current.value));
    }
  }

  return (
    <main>
      <input
        type="text"
        placeholder="Användarnamn"
        ref={username}
        // onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="E-post"
        ref={email}
        // onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={handleClick}>Uppdatera</button>

      <DisplayUser />
    </main>
  );
}

export default App;
