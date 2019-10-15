import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
  let date = new Date(props.note.modified);
  return (
    <Link to={`/note/${props.note.id}`}>
        <div onClick={()=> props.noteClicked(props.note.id)} className ='note-div'>
            <h2>{props.note.name}</h2>
            {date.toDateString()}
        </div>
        <button className='remove-button'>
            Remove
        </button>
    </Link>
  )

}