function TodoItem(props) {
  const { item } = props;

  return <li>{item.todo}</li>;
}

export default TodoItem;
