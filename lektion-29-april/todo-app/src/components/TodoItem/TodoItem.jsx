function TodoItem(props) {
  const { item } = props;

  return <li>{item.text}</li>;
}

export default TodoItem;
