import React from 'react';
import Note from './Note';

export default function(props) {
  let newArray= props.currentNote.note.content.split('\n \r');
  let paragraphs = newArray.map((content, index) => {
    return <p key={index}>{content}</p>
  })

  return(
    <div>
      <Note noteClicked= {props.noteClicked} note={props.currentNote.note}/>
        {paragraphs}
    </div>
  )
}