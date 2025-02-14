import "./App.css";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="bg-slate-600 h-screen flex flex-wrap justify-center items-center">
      <TodoLists />
    </div>
  );
}

export default App;
