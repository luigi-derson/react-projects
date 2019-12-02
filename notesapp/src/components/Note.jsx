import React, { useContext } from "react";
import NotesContext from "../context/notes-context";

const Note = ({ title, body }) => {
  const { dispatch } = useContext(NotesContext);

  const removeNote = () => {
    dispatch({ type: "REMOVE_NOTE", id: title });
  };

  return (
    <div key={title}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button type="button" onClick={removeNote}>
        x
      </button>
    </div>
  );
};

export { Note as default };
