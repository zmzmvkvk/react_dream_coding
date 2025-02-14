import { useState } from "react";

export default function Todo({ id, text, onChecked, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((check) => !check);
    onChecked({ ...text, status: isChecked ? "Active" : "Completed" });
  };

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li>
      <input id={id} type="checkbox" checked={isChecked} onChange={handleCheck} />
      <label htmlFor={id}>{text.text}</label>
      <button onClick={handleDelete}>🗑</button>
    </li>
  );
}
