import { toggleTodo } from "../../redux/actions/todoAction";
import "./ToDoList.css";
import { useSelector,useDispatch } from "react-redux"; //useDisapatch to dispatch an action

function ToDoList() {

  //useSelector --hook to access the redux store's state 
  const todos = useSelector((state)=> state.todos); //useSelctor hook //use this beacause we shold not use store in every component beacause of abstraction(hiding store at backend)
  // const todos = store.getState().todos;          //same result as above 
   const dispatch = useDispatch();  //calling useDispatch function to get access to store dispatch function

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          //it will call the toggle function get that object .pass that object to dispatch and then goes to reducer.Reducer(inside todoReducer.js) based on index position is toggling the completed stats
          onClick={()=>{dispatch(toggleTodo(index))}} //calling toggleTodo function and whatever result we are getting that result is passed onto dispatcher here
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
