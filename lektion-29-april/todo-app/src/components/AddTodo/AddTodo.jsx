function AddTodo(props) {
  let todoText = "";
  const { updateTodos } = props;

  function handleInput(event) {
    todoText = event.target.value;
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
