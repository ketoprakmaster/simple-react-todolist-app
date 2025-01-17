import React, { useState } from "react";

const NoteList = ({ notes, deleteNote, editNote, toggleCompletion }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(notes[index].text); // Pre-fill with the current note's text
  };

  const saveEdit = () => {
    editNote(editIndex, editText);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <article>
    <ul>
      { notes.length === 0 && <h6 className="center">there's nothing you have to do now</h6>}
      {notes.map((note, index) => (
        <><li key={index} className="note-item">
          <input
            type="checkbox"
            checked={note.completed}
            onChange={() => toggleCompletion(index)}
          />
          <div className="note-text">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: note.completed ? "line-through" : "none" }}>
                {note.text}
              </span>
            )}
          </div>
          <div className="note-actions">
            {editIndex === index ? (
              <>
                <button onClick={saveEdit}>Save</button>
                <button className='delete' onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button className='delete' onClick={() => deleteNote(index)}>Delete</button>
              </>
            )}
          </div>
        </li><hr/></>
      ))}
    </ul>
    </article>
  );
};

export default NoteList;
