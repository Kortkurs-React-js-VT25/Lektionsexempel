function DeleteNote(props) {
    const { id } = props;

    async function deleteNote() {
        const response = await fetch(
            `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`,
            { method: 'Delete' }
        );
        const data = await response.json();
        console.log(data);
      }

    return (
        <button onClick={ deleteNote }>Ta bort</button>
    )
}

export default DeleteNote;