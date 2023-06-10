import "./ToDoList.css";
import { useSelector } from "react-redux";

function ToDoList({ onToggle}) {

  //useSelector --hook to access the redux store's state 
  const todos = useSelector((state)=> state.todos); //useSelctor hook //use this beacause we shold not use store in every component beacause of abstraction(hiding store at backend)
  // const todos = store.getState().todos;          //same result as above 

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
