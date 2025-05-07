import "./App.css";
import { useState, useEffect } from "react";

import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const heading = "Todo App";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Körs efter varje state uppdatering, används extremt sällan");
  });

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();

      setTodos(data.todos);
    }

    getTodos();
    console.log(
      "Körs efter enbart vid första komponentrendering, används ofta till API-anrop"
    );
  }, []); // En tom array menas att denna useEffect enbart körs en gång, används mycket för API-anrop

  useEffect(() => {
    console.log("Nu har todos uppdateras", todos);
  }, [todos]); // Körs enbart när todos state uppdateras annars inte

  const todoComponents = todos.map((todo) => {
    return <TodoItem item={todo} key={todo.id} />;
  });

  function updateTodos(todoText) {
    console.log("I updateTodos och skapar en todo med texten: ", todoText);

    const todo = {
      id: todos.length + 1,
      todo: todoText,
      completed: false,
    };

    /* Nedan gör samma sak som det på rad 73-75
    const tempTodos = [...todos];
    tempTodos.push(todo);
    setTodos(tempTodos); */

    setTodos((prevState) => {
      return [...prevState, todo];
    });
  }

  return (
    <main className="App">
      <h1>{heading}</h1>
      <ul>{todoComponents}</ul>
      <AddTodo updateTodos={updateTodos} />
    </main>
  );
}

export default App;
