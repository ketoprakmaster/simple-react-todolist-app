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

  const addNote = (text) => {
    const newNote = { text, completed: false }; // Each note has text and a completion status
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (index) =>
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));

  const editNote = (index, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === index ? { ...note, text: newText } : note))
    );
  };

  const toggleCompletion = (index) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) =>
        i === index ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
    <article>
        <h1 className="center">To Do List App</h1>
        <NoteForm addNote={addNote} />
    </article>
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
};

export default App;

