import React, { useState } from "react";

export default function NewTodoForm({addTodo}) {
  const [newItem, setNewItem] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return

    addTodo(newItem)
    setNewItem("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 py-10 justify-center items-center"
    >
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="enter the todo item..."
        className="border p-2 capitalize"
      />
      <button className="border p-2 bg-green-100 active:bg-green-500 active:text-white w-20 rounded-md">
        Add
      </button>
    </form>
  );
}
