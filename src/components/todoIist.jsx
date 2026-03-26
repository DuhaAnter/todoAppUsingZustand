import TodoItem from "./todoItem";
import { useTodoStore} from "../stores/todo.store"
export default function TodoList(){
    const todos = useTodoStore((state) => state.todos);
    return(
        <ul  className="todo-list">
            {
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))
            }
        </ul>
    )
}