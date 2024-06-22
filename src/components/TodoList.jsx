import React from "react";
import Todoitem from "./Todoitem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <div className="container py-5 pt-0">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <ul className="list-group">
              {todos.map((item, index) => (
                <Todoitem
                  item={item}
                  key={index}
                  todoId={index}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
