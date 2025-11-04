import { useState } from "react";

function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo(""); // clear input after adding
  };

  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="Enter a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
