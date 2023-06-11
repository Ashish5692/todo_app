
import {ADD_NOTE,DELETE_NOTE} from "../actions/noteActions";

//initial state for the notes
const initialState = {
    notes:[
        { text:"Hey i am writing the note",createdOn: new Date()},
        { text:"I enjoy going to gym",createdOn: new Date()}
    ]
};

//creating Reducer function which will be pure function and it will have 3 actions-- add a note,delete a note and default action to return the state
//for this create note reducer which will take state and action as parameter and those actions should be implemented on that state

//exporting it so that it can be used in store
export function Reducer(state=initialState,action){

    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes:[
                    ...state.notes,  //sending all the existing notes
                    //along with it passing new note
                    {
                        text: action.text, //new note taking text passed with action
                        createdOn: new Date() //current date
                    }
                ]
            }
        case DELETE_NOTE:
            state.notes.splice(index,1); //splice fn to delete function from array.index meand position and number of elements we want to delete is 1
            return{
                ...state, //returning everything from existing state
                notes: state.notes //note swhich are now modified
            }

        default:
            return state; //returning existing state without any modification

        
    }
}