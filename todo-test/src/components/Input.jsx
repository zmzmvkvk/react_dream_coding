import { useState } from "react";

export default function Input({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full py-3 px-5 bg-slate-900 rounded-b-2xl">
      <input id="input" className="bg-white placeholder-slate-400 p-1 rounded-l-md flex-1 text-black pl-3 focus:outline-0" type="text" placeholder="Add Todo" onChange={handleChange} />
      <button className="bg-amber-500 px-6 rounded-r-md">Add</button>
    </form>
  );
}
