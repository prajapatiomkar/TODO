import React from "react";

export default function TodoItems({
  id,
  index,
  completed,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <div className="flex gap-2 items-center justify-between my-2">
      <div
        className={`capitalize ${completed && "line-through	text-gray-400"}`}
      >{`${index + 1}. ${title}`}</div>
      <div className="flex gap-3 ml-10 ">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <button
          className="bg-red-100  active:bg-red-500 active:text-white p-1 w-20 rounded-md"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
