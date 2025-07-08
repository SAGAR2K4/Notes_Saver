import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './index.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const addNote = (note) => {
    setNotes([{ ...note, id: Date.now(), timestamp: new Date(), pinned: false }, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const togglePin = (id) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  const filteredNotes = notes
    .filter(note =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.content.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => b.pinned - a.pinned); // Show pinned notes first

  return (
    <div className="app dark-mode">
      <Navbar setSearchText={setSearchText} />
      <NoteForm addNote={addNote} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
        togglePin={togglePin}
      />
    </div>
  );
}


export default App;
