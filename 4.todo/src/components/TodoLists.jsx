import Input from "./Input";
import Header from "../Header";
import Todos from "./Todos";
import { useState } from "react";
import Todo from "./Todo";
import { useImmer } from "use-immer";

export default function TodoLists() {
  const [todos, setTodos] = useImmer(initialTodos.todos);
  const [todoText, setTodoText] = useState("");
  const onSubmitHandler = (value) => {
    setTodoText(value);
    setTodos((todo) => {
      todo.todos.push({ text: todoText });
    });
  };
  return (
    <div className="flex flex-wrap shadow-2xl w-sm h-100 bg-slate-800 text-white rounded-2xl flex-col">
      <Header />
      <Todos>
        {todos.map((todo) => {
          <Todo text={todo} />;
        })}
      </Todos>
      <Input onSubmit={onSubmitHandler} />
    </div>
  );
}

const initialTodos = {
  todos: [{ text: "공부하기" }],
};
