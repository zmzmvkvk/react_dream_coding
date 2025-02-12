import Todo from "./Todo";

export default function Todos() {
  return (
    <div className="w-full flex-1 px-5 py-4 overflow-y-scroll">
      <Todo text="공부하기" />
    </div>
  );
}
