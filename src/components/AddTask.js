import React, { useState } from "react";
import { addTodo } from "../redux/Actions";
import {v1 as uuid} from 'uuid';
import { useDispatch } from "react-redux";



const AddTask = () => {
  let [description, setDescription] = useState("");
  let dispatch = useDispatch();
  console.log(description)
  return (
    <div>
      <div className="row m-4">
        <input
          onChange = {(e) => setDescription(e.target.value)}
          value={description || ''}
          type="text"
          className="col form-control"
        />
        <button
          onClick={() => {dispatch( addTodo(
              
            {
              id: uuid(),
              description: description,
            }
            
            ));
            setDescription('');
          }}
  
          className="btn btn-primary mx-2"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
