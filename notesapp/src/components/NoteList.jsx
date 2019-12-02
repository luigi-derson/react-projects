import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return notes.map(({ title, body }) => (
    <Note key={title} body={body} title={title} />
  ));
};

export default NoteList;
