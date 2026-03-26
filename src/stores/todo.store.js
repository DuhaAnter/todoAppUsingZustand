import { create } from "zustand";

export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => {
     set((state) => ({ todos: [...state.todos, todo] })) 
    },
    removeTodo:(id)=>{
        set( (state)=>({ todos: state.todos.filter((todo) => todo.id !== id) }))
    },
    toggleComplete:(id)=>{
        set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }))
    },
    updateTodo:(id, newText)=>{
        set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo) }))
    }
}))