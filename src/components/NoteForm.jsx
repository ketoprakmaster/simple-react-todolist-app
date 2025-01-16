import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset role="group">
        <input
          type="text"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default NoteForm;
