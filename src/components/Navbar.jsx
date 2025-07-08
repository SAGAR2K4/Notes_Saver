import React from 'react';
import './Navbar.css';

const Navbar = ({ setSearchText }) => {
  return (
    <nav className="navbar">
      <h1>📝 Note Saver</h1>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
