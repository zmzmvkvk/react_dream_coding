import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    text.trim() && onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo" value={text} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}
