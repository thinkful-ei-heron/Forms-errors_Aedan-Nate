import React from 'react';

export default function (props) {
  let date = new Date(props.note.modified);
  return (
    <div onClick={()=> props.noteClicked(props.note.id)}>
      <h2>{props.note.name}</h2>
      {date.toDateString()}
      <button className='remove-button'>
        Remove
      </button>
    </div>
  )

}