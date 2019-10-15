import React from 'react';

export default function NoteSection(props) {
    let newArray = props.notes.map(note => {
        return (
            <li key={note.id}>
                <button>
                    <h2>{note.name}</h2>
                    {Date(note.modified)}
                </button>
                <button className='remove-button'>
                    Remove
                </button>
            </li>
        );
    })
    return (
        <ul>
            {newArray}
        </ul>
    );
}