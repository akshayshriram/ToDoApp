import React from "react";
import { IoMdClose } from "react-icons/io";

const Todoitem = ({ item, todoId, todos, setTodos }) => {
  console.log(todos);
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.taskName === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span
          role="button"
          className={item.done && `text-decoration-line-through`}
          onClick={() => handleClick(item.taskName)}
        >
          {item.taskName}
        </span>
        <div className="d-flex gap-3">
          <span className="badge bg-primary rounded-pill px-4 py-3">P1</span>
          <span>
            <button
              onClick={() => {
                handleDelete(item);
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
