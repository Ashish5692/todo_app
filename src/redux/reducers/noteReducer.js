
//import {ADD_NOTE,DELETE_NOTE} from "../actions/noteActions";

const { createSlice } = require("@reduxjs/toolkit");

//initial state for the notes
const initialState = {
    notes:[
        { text:"Hey i am writing the note",createdOn: new Date()},
        { text:"I enjoy going to gym",createdOn: new Date()}
    ]
};

// Creating Reducer using Redux Toolkit

const noteSlice = createSlice({
    name : 'note',
    initialState: initialState, //second object attribute
    reducers: {
        //this is add action
        add: (state,action) =>{
            state.notes.push({   //pusing new note with text and createdOn property
                text: action.payload,
                createdOn: new Date()
            })
        },
        delete: (state,action) =>{
            state.notes.splice(action.payload,1); //splice function to delete--it takes the index form where you want to delete, 1 - signifies how many records you want to delete(deleting 1 element here)
        }
        //we are not using default switch case because it is taken care internally by Redux toolkit
    }
})



// Reducer using Redux

//creating Reducer function which will be pure function and it will have 3 actions-- add a note,delete a note and default action to return the state
//for this create note reducer which will take state and action as parameter and those actions should be implemented on that state


//exporting it so that it can be used in store
// export function noteReducer(state=initialState,action){

//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,  //sending all the existing notes
//                     //along with it passing new note
//                     {
//                         text: action.text, //new note taking text passed with action
//                         createdOn: new Date() //current date
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1); //splice fn to delete function from array.index meand position and number of elements we want to delete is 1
//             return{
//                 ...state, //returning everything from existing state
//                 notes: [...state.notes] //notes which are now modified
//             }

//         default:
//             return state; //returning existing state without any modification

        
//     }
// }