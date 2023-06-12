//import actions --now no need when using redux toolkit
//import { ADD_TODO,TOGGLE_TODO} from "../actions/todoActions";

const { createSlice } = require("@reduxjs/toolkit");

//create initial state in our store--object where we can have collection of objects
const initialState = {
    todos: [
        {text: "Meeting at 9", completed:true},
        {text: "Lunch at 2", completed: false},
    ]
}

// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({
    //name to slice which we are creating
    name:'todo',
    initialState: initialState,
    //passing another object
    //in reducers we define our action and what we will do insidee actions -in todo we have 2 actions -addtodo and toggle todo
    reducers:{
        //for add key we will define a function
        //this is add action
        //state allow to acess state and todo values and action allow to get any data dispatched from component
        //redux toolkit gives another action that is payload(in payload whatever data we pass from component) payload property of action to acess the text
        add:(state,action)=>{
            state.todos.push({ //pushing new object
                text: action.payload,  //payload is attribute provided by redux toolkit for these actions
                completed: false
            })
            //now we dont need to worry about returning the modified state that is taken care by redux toolkit
        },
        //second action i.e toggleAction
        toggle:(state, action) =>{ //map function to find data based on index and when index matches we toggle the completed status
            state.todos.map((todo,i)=>{
                //now we are not creating any action type or action creators
                //so to access index(recieve any data from component) we use payload property of action
                if(i===action.payload){  //payload is index it could be anything which component will send through dispatcher
                    todo.completed = !todo.completed;    
                }
                return todo;
            })
            }
        }
        //this completes our todo reducers with redux toolkit
    
});

export const todoReducer = todoSlice.reducer;

// Reducer using Redux

// export function todoReducer(state= initialState,action){
//     switch(action.type){
//         //every reducer action must return the state i.e current state nad modified state
//         //As of now we dont have anything in state so we need to create our initial state and pass it as default parameter in our reducer
        

//         //ADD_TODO is taking the payload and just adding that payload into the existing collection
//         case ADD_TODO : 
//             //returning single object in form of state
//             return {
//                 ...state, //passing over all the existing data from the state--todos:[]
//                 todos: [
//                     ...state.todos, //existing todos
//                     {
//                         text:action.text, //adding new todos in the same array
//                         completed: false
//                     }
//                 ]
//                 //our first actioni completed
//                 //now we have updated the state so we are returning that state from reducer
//             }

//         //TOGGLE_TODO is going through individual elements and wherever index is matching ,,it is switching its completed property  
//         case TOGGLE_TODO:
//             //returning sate
//             return {
//                 ...state,
//                 //we will not add new todo we will use map function
//                 //In Map function we are checking the index of the todo
//                 //we are checking the index from actions
//                 //we are getting the index in the action and matching with index in the map function
//                 //if it matches we toggle the completed status
//                 todos: state.todos.map((todo,i) =>{
//                     //we match i with action.index because at that we are going to recieve the payload from dispatcher
//                     if(i===action.index){
//                         todo.completed = !todo.completed
//                     }
//                     return todo; //return todo data from map function as map function will take that todo and creates new array

//                 })
//             }
//         default:
//             return state; //return whatever the state is at that point of time
//     }
// }
// //so this completes our implementation of reducer with all the actions(2 actions here)