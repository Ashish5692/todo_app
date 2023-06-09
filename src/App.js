import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import './App.css';

function App() {
  const [todos, setTodos] = useState([]); //main todo state managed by app component

  const createTodo = (text) => {
    //takes todos and updates it
    setTodos([...todos, { id: todos.length + 1, text, completed: false}]);
  };

  const toggleTodo = (index)=>{
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }

  return (
    <div>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>ToDo App</h1>

      {/* passing action that is createTodo function */}
      <TodoForm onCreateTodo={createTodo} />  
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;

