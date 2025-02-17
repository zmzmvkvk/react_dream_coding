import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "장보기", status: "active" },
    { id: uuidv4(), text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (id) => setTodos(todos.filter((todo) => id !== todo.id));

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
        {filtered.map((todo) => (
          <Todo key={todo.id} id={todo.id} item={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
