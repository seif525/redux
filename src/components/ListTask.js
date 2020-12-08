import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  let todos = useSelector((state) => state);

  return (
    <div className="container my-4">
      {todos.map((todo) => {
        return <Task key={todo.id} todo={todo} />;
      })} ;
    </div>
  );
};

export default ListTask;
