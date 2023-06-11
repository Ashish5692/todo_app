
//action constants
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "Toggle Todo";

//action creators
export const addTodo = (text)=>({ text, type: ADD_TODO});
export const toggleTodo =(index) =>({index, type: TOGGLE_TODO}); //taking index and returning us object which has index and type attribute//