import { useState } from "react";
import { useTodoStore } from "../stores/todo.store";

export default function TodoInput() {
    //The setter is the only way to tell React: "The data changed, please redraw the component.
  const [task, setTask] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  const handleadd = () => {
    addTodo({ id: Date.now(), text: task, completed: false });
    setTask("");
  };


  return (
    <div className="todo-input">
      <input type="text" placeholder="Enter a new todo" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleadd}>Add</button>
    </div>
  );

  
}
