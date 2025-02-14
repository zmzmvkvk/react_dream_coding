import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "장보기", status: "active" },
    { id: uuidv4(), text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleChecked = (todo) => {
    console.log(todo);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo} onChecked={handleChecked} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
