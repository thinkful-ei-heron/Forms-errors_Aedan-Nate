import React from 'react';
import SideBar from './SideBar'
import NoteSection from './NoteSection'

export default function HomePage(props) {

    return(
        <div>
            <NoteSection noteClicked= {props.noteClicked} notes={props.notes}/> 
        </div>
    );
}