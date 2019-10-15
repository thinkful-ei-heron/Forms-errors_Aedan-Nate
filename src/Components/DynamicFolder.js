import React from 'react';
import NoteSection from './NoteSection';

export default function (props) {
    if(props.currentFolder === null) props.folderClicked(props.match.params.folderId);
    let newArray = props.notes.filter(note => note.folderId === props.currentFolder);
    return (
        <NoteSection noteClicked={props.noteClicked} notes={newArray} />
    )
}