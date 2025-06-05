import { useState } from "react";

function CreateNote(props) {
    const [title, setTitle] = useState('');
    const [noteText, setNoteText] = useState('');

    const { username } = props;

    async function postNote() {
        const note = {
            username: username,
            title: title,
            note: noteText
          }
          
          let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
            method: "POST",
            body: JSON.stringify(note), // Gör om till ett JSON objekt
            headers: {
              'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
            }
          });
          const data = await response.json();
          console.log(data);
    }

    return (
        <section>
            <input type="text" placeholder="Titel"
                onKeyUp={ (event) => { setTitle(event.target.value) } } />
            <input type="text" placeholder="Anteckning"
                onKeyUp={ (event) => { setNoteText(event.target.value) } } />
            <button onClick={ postNote }>Spara</button>
        </section>
    )
}

export default CreateNote;