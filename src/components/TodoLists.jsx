import React from "react";
import TodoItems from "./TodoItems";

export default function TodoLists({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="flex flex-col">
      <h1 className="capitalize	 text-xl border-b">todo lists items</h1>
      <div className="mt-2">
        {todos.length === 0 && (
          <div className="my-2 text-gray-400">Empty Todo Lists</div>
        )}
        {todos.map((todo, index) => (
          <TodoItems
            {...todo}
            key={todo.id}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
