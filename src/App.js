import { Fragment } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import {store} from "./redux/store";  //getting store as an object
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // const [todos, setTodos] = useState([]); //main todo state managed by app component

  // const createTodo = (text) => {
  //   //takes todos and updates it
  //   setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  // };

  // const toggleTodo = (index)=>{
  //   const list = [...todos];
  //   list[index].completed = !list[index].completed;
  //   setTodos(list);
  // }

  return (

    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="todo"
          element={
            <Fragment>
              <NavBar />
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
            </Fragment>
          }>

          </Route>
          <Route path="notes"
          element={
            <Fragment>
               <NavBar />
               <h1>Notes</h1>
              <NoteForm  />
              <NoteList />
            </Fragment>
          }>
            
            </Route>
        </Routes>
       
        </BrowserRouter>
      </Provider>
    </div>


    // <div>
    //   <h1>ToDo App</h1>

    //   {/* Provider is redux element coming from react redux */}
    //   <Provider store={store}> 
    //   {/* passing action that is createTodo function */}
    //   <TodoForm onCreateTodo={createTodo} />  
    //   <TodoList todos={todos} onToggle={toggleTodo} />
    //   </Provider>
    // </div>
  );
}

export default App;

