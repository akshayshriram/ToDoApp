import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import TasksCount from "./TasksCount";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TasksCount todos={todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
