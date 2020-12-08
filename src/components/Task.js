import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/Actions";

const Task = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [edit, setEdit] = useState(false);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div className="diez"> #</div>
        <div className="font col">
          {edit ? (
            <input
              className="form-control"
              type="text"
              placeholder="write Task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <h4>{todo.description}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                description: description,
              })
            );
            if (edit) {
              setDescription(todo.description);
            }
            setEdit(!edit);
          }}
          className=" btn btn-primary m-2"
        >
          {edit ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className=" btn btn-danger m-2"
        >
          Delete
        </button>
       
      </div>
    </div>
  );
};

export default Task;
