import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoLists from "./components/TodoLists";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      if (title) {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
        ];
      } else {
        return [...todos];
      }
    });
  }

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="flex justify-center mt-5 text-gray-800">
      <div className="border px-3">
        <h1 className="text-center text-3xl uppercase border-b mt-5">todo </h1>
        <NewTodoForm addTodo={addTodo} />
        <TodoLists
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
