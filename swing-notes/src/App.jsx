import { useState } from 'react'
import './App.css'

import Note from './components/Note/Note';
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [username, setUsername] = useState('');

  async function getNotes() {
    const response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`);
    const data = await response.json();
    setNotes(data.notes);
  }

  const noteComponents = notes.map((note) => {
    return <Note note={ note } key={ note.id } />
  });

  return (
    <main>
      <section>
        <input type="text" placeholder="Användarnamn"
        onKeyUp={ (event) => { setUsername(event.target.value) } } />
        <button onClick={ getNotes }>Hämta anteckningar</button>
      </section>
      <CreateNote username={ username } />
      <section>
        { noteComponents }
      </section>
    </main>
  )
}

export default App
