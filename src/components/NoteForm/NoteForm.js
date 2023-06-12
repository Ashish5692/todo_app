import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
//import { addNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/todoReducer";

//we are directly taling with store now so we have removed the props which we were recieving in NoteForm
//and we have used dispatch function to dispatch the add Note action
function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();  //calling useDispatch hook

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addNote(noteText))     // we will call the dispatch function with add note function ..in dispatch we will pass that addNote action creator and in that addNote it is expecting text which we are storing in state 
    dispatch(actions.add(noteText)); //calling actions.add with payload which is noteText here
    setNoteText("");
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
