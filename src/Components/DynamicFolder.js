import React from 'react';
import NoteSection from './NoteSection';

export default function (props) {
    return (
        <NoteSection noteClicked={props.noteClicked} notes={props.notes} />
    )
}