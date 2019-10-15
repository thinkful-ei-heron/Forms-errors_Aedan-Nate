import React from 'react';
import './NoteSidebar.css';

export default function(props) {
  return (
    <div className="note-sidebar">
      <button>
        Back
      </button>
      <h2>{props.folder}</h2>
    </div>
  )
}