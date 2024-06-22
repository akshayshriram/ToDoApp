import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ taskName: "", priority: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ taskName: "", done: false });
  };
  return (
    <div className="container py-5">
      <div className="row">
        <form onSubmit={handleSubmit} className="col-12 col-md-8 mx-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              value={todo.taskName}
              onChange={(e) =>
                setTodo({ ...todo, taskName: e.target.value, done: false })
              }
              className="form-control"
              placeholder="Add Your Task Here..."
              aria-label="Add Your Task Here..."
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Priority
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>

            <button className="btn btn-dark" type="button" id="button-addon2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
