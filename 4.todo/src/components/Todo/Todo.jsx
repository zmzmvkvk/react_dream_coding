export default function Todo({ id, item, onUpdate, onDelete }) {
  const { text, status } = item;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...item, status });
  };

  const handleDelete = () => onDelete(id);
  return (
    <li>
      <input id={id} type="checkbox" checked={status === "completed"} onChange={handleChange} />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>🗑</button>
    </li>
  );
}
