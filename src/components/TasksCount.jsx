import React from "react";

const TasksCount = ({ todos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 d-flex justify-content-between mx-auto pt-5">
          <p>
            Task Completed :{" "}
            <span className="badge rounded-pill bg-success px-3 py-2">
              {todos.filter((todo) => todo.done).length}
            </span>
          </p>
          <p>
            Total Task:{" "}
            <span className="badge rounded-pill bg-primary px-3 py-2">
              {todos.map((todo) => todo).length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TasksCount;
