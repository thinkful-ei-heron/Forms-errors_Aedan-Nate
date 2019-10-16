import React from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';

export default function NoteSection() {
    let newArray = <NotefulContext.Consumer>
        {({contextState}) => (
        contextState.notes.map(note => {
        return (
            <li key={note.id} className="noteList">
                <Note note={note} />
            </li>
        );
    }))}
    </NotefulContext.Consumer>
    return (
        <ul>
            {newArray}
        </ul>
    );
}