import { useState } from "react";

function AddTodo(props) {
  const [todoText, setTodoText] = useState("");
  const { updateTodos } = props;

  function handleInput(event) {
    setTodoText(event.target.value);
  }

  function handleClick() {
    console.log(todoText);
    updateTodos(todoText);
  }

  return (
    <section>
      <input type="text" placeholder="Ny todo" onKeyUp={handleInput} />
      <button onClick={handleClick}>Lägg till todo</button>
    </section>
  );
}

export default AddTodo;
