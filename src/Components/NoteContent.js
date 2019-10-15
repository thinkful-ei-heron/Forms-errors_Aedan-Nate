import React from 'react';
import Note from './Note';
import './NoteContent.css'

export default function(props) {
  let newArray= props.currentNote.note.content.split('\n \r');
  let paragraphs = newArray.map((content, index) => {
    return <p key={index}>{content}</p>
  })

  return(
    <div className ='note-content'>
      <div className='noteLink'>
        <Note noteClicked= {props.noteClicked} note={props.currentNote.note}/>
      </div>
      {paragraphs}
    </div>
  )
}