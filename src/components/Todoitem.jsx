import React from "react";
import { IoMdClose } from "react-icons/io";

const Todoitem = ({ item, todoId, todos, setTodos }) => {
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.taskName === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function getPriority(priority) {
    switch (priority) {
      case "1":
        return "bg-danger";
      case "2":
        return "bg-warning";
      case "3":
        return "bg-info";
    }
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span
          role="button"
          className={item.done ? "text-decoration-line-through" : ""}
          onClick={() => handleClick(item.taskName)}
        >
          {item.taskName}
        </span>
        <div className="d-flex gap-3">
          <span
            className={`${getPriority(
              item.priority
            )} badge rounded-pill px-4 py-3`}
          >
            P{item.priority}
          </span>
          <span>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn btn-danger"
            >
              <IoMdClose />
            </button>
          </span>
        </div>
      </li>
    </>
  );
};

export default Todoitem;
