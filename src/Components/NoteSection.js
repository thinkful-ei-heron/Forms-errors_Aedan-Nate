import React from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';

export default function NoteSection() {
    let newArray = <NotefulContext.Consumer>
        {({contextState}) => {
            let noteArray = contextState.currentFolder ? contextState.notes.filter(note => note.folderId === contextState.currentFolder) : contextState.notes;
            
            return noteArray.map(note => {
                return (
                    <li key={note.id} className="noteList">
                        <Note note={note} />
                    </li>
                );
            })  
        }}
    </NotefulContext.Consumer>
    return (
        <ul>
            {newArray}
        </ul>
    );
}