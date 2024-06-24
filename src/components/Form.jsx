import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({
    taskName: "",
    priority: "1",
    done: false,
    id: uuidv4(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({
      taskName: "",
      priority: "1",
      taskNumber: "",
      done: false,
      id: uuidv4(),
    });
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
            <select
              className="form-select"
              aria-label="Default select example"
              value={todo.priority}
              onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
            >
              <option value="1">P1</option>
              <option value="2">P2</option>
              <option value="3">P3</option>
            </select>

            <button className="btn btn-dark" type="submit" id="button-addon2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
