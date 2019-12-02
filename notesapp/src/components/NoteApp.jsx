import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const position = useMousePosition();

  useEffect(() => {
    // Read data from local store and add them to the array, once the component is Loaded.
    const notesStored = JSON.parse(localStorage.getItem("notes"));
    if (notesStored) {
      dispatch({ type: "POPULATE_NOTES", notes: notesStored });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>
        Notes {position.x}, {position.y}
      </h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
