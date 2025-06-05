import DeleteNote from "../DeleteNote/DeleteNote";

function Note(props) {
    const { note } = props;

    return (
        <article>
            <h2>{ note.title }</h2>
            <p>{ note.note } </p>
            <p>{ note.username }</p>
            <DeleteNote id={ note.id } />
        </article>
    )
}

export default Note;