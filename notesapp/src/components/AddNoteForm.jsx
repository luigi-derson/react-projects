import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(NotesContext);

  const addNote = e => {
    e.preventDefault();
    if (title) {
      dispatch({ type: "ADD_NOTE", title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Add note</button>
      </form>
    </>
  );
};

export default AddNoteForm;
