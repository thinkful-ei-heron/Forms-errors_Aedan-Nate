import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';

export default function (props) {
  console.log(props)
  return (
    <NotefulContext.Consumer>
      {({noteClicked}) => (
          <Link to={`/note/${props.note.id}`}>
              <div onClick={()=> noteClicked(props.note.id)} className ='note-div'>
                  <h2>{props.note.name}</h2>
                  {new Date(props.note.modified).toDateString()}
              </div>
              <button className='remove-button'>
                  Remove
              </button>
          </Link>
      )}
    </NotefulContext.Consumer>
  )

}