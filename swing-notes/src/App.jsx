import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, updateUsername } from "./reducers/notesReducer";

import Note from "./components/Note/Note";
import CreateNote from "./components/CreateNote/CreateNote";

function App() {
  const swingNotes = useSelector((state) => {
    return state.swingNotes;
  });
  const dispatch = useDispatch();

  async function getNotes() {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${swingNotes.username}`
    );
    const data = await response.json();
    dispatch(addNotes(data.notes));
  }

  const noteComponents = swingNotes?.notes?.map((note) => {
    return <Note note={note} key={note.id} />;
  });

  return (
    <main>
      <section>
        <input
          type="text"
          placeholder="Användarnamn"
          onKeyUp={(event) => {
            dispatch(updateUsername(event.target.value));
          }}
        />
        <button onClick={getNotes}>Hämta anteckningar</button>
      </section>
      <CreateNote />
      <section>{noteComponents}</section>
    </main>
  );
}

export default App;
