import React from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';

export default function NoteSection(props) {
    let newArray = <NotefulContext.Consumer>
        {({contextState}) => {
            let noteArray = props.match.params.folderId ? contextState.notes.filter(note => note.folderId === props.match.params.folderId) : contextState.notes;
            
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