import NoteCard from './NoteCard';
import './NoteList.css';

const NoteList = ({ notes, deleteNote, editNote, togglePin }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
          togglePin={togglePin}
        />
      ))}
    </div>
  );
};

export default NoteList;
