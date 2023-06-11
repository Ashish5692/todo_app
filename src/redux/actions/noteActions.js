//action constants
export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

//action creators -- arrow functions which take payload which you need to pass from component along with the action
//so our addNote action will take text payload then it will add text and type
export const addNote = (text)=>({ text, type: ADD_NOTE});

//we are going to use the index position to delete any item from note array or collection
export const deleteNote =(index) =>({index, type: DELETE_NOTE}); //taking index and returning us object which has index and type attribute//