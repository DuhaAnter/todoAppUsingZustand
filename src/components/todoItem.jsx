import { useTodoStore } from "../stores/todo.store";
import { useState } from "react";


export default function TodoItem({ todo }) {


  const { toggleComplete, removeTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(todo.id, newText);
        setIsEditing(false);
    }

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        className={`todo-item ${todo.completed ? "completed" : ""}`}
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
    

      {
        isEditing ?
       (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) :
      (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )
      }

     {isEditing ?
      (
        <button onClick={handleUpdate}>Save</button>
      ) :
       (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
