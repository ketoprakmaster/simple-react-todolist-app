import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes((prevNotes) => [...prevNotes, note]);

  const deleteNote = (index) =>
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));

  const editNote = (index, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === index ? newText : note))
    );
  };

  return (
    <div className="container">
      <article>
        <h1 className="center">Notes App</h1>
        <NoteForm addNote={addNote} />
      </article>
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
};


export default App;
