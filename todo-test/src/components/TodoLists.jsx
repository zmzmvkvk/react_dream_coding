import Input from "./Input";
import Header from "../Header";
import Todos from "./Todos";
import { useState } from "react";
import Todo from "./Todo";

export default function TodoLists() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoText, setTodoText] = useState("");
  const onSubmitHandler = (value) => {
    setTodoText(value);
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
    };
    setTodos((todo) => {
      console.log(todo);
      return [...todo, newTodo];
    });
  };

  return (
    <div className="flex flex-wrap shadow-2xl w-sm h-100 bg-slate-800 text-white rounded-2xl flex-col">
      <Header />
      <Todos>
        {todos.map((todo) => {
          <Todo key={todo.id} text={todo.text} />;
        })}
      </Todos>
      <Input onSubmit={onSubmitHandler} />
    </div>
  );
}

const initialTodos = [
  { id: 1, text: "장보기", status: "active" },
  { id: 2, text: "공부하기", status: "active" },
];
