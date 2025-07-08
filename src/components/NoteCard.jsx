import { useState } from 'react';
import './NoteCard.css';

const NoteCard = ({ note, deleteNote, editNote, togglePin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    editNote({
      ...note,
      title: editedTitle,
      content: editedContent,
      timestamp: new Date(),
    });
    setIsEditing(false);
  };

  return (
    <div className={`note-card ${note.pinned ? 'pinned' : ''}`}>
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            rows="3"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </>
      )}

      <div className="note-footer">
        <span>{note.timestamp.toLocaleString()}</span>
        <div className="btn-group">
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button onClick={() => togglePin(note.id)}>
            {note.pinned ? 'Unpin' : 'Pin'}
          </button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
