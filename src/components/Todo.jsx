import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item, index) => (
        <Todoitem item={item} key={index} />
      ))}
    </>
  );
};

export default Todo;
