import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch ,useSelector} from "react-redux"; // hook for accessing redux dispatch actions ,,no need of store //earlier in vanilla js we had used store.dispatch fn directly
//import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

//import styles from "./ToDoForm.module.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  //call the dispatch
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector)

  if(message){
    //setTimeOut takes 2 actions- first parameter is action/function we want to perform and second is time in milliseconds
    setTimeout(()=>{
      dispatch(resetNotification());
    },3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    //using dispatch function --  it needs an action function calladdToDo
    //this function as an action will be dispatched to reducer --then reducer will update the state and then when store is updated we will update the consumer components(reading data from store--here it is todoList)
    dispatch(actions.add(todoText)) ; //todo text will be passed as an argument
  };

  return (
    <div className="container">
      {//if message is available then render alert notification
        message &&
        <div class="alert alert-success" role="alert">
        {message}
        </div>
      }
      
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
