function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }} className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} style={{ margin: "6px 0" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: 8,
            }}
          >
            {todo.text}
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
            alt="Delete"
            width="18"
            height="18"
            style={{
              marginLeft: 10,
              cursor: "pointer",
              verticalAlign: "middle",
            }}
            onClick={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
