import React, { useState } from "react";

const NoteList = ({ notes, deleteNote, editNote }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(notes[index]); // Pre-fill with the current note's text
  };

  const saveEdit = () => {
    editNote(editIndex, editText);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <article>
      {notes.length === 0 && <h4 className="center">No Notes Available</h4>}
    <ul>
      {notes.map((note, index) => (
        <li key={index} className="note-item">
          <div className="note-text">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span>{note}</span>
            )}
          </div>
          <div className="note-actions">
            <div role="group">
            {editIndex === index ? (
              <>
              <button onClick={saveEdit}>Save</button>
              <button className="delete" onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete" onClick={() => deleteNote(index)}>Delete</button>
              </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
    </article>
  );
};

export default NoteList;
