import Input from "./Input";
import Header from "../Header";
import Todos from "./Todos";

export default function TodoLists() {
  const onSubmitHandler = () => {};
  return (
    <div className="flex flex-wrap shadow-2xl w-sm h-100 bg-slate-800 text-white rounded-2xl flex-col">
      <Header />
      <Todos />
      <Input onSubmit={onSubmitHandler} />
    </div>
  );
}
