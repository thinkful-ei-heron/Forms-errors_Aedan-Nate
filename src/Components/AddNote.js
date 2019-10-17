import React from 'react';
import NotefulContext from './NotefulContext';
import {withRouter} from 'react-router-dom';

class AddNote extends React.Component { 
  render() { 
    return (
      <NotefulContext.Consumer>
        {({validateNote, contextState}) => (
          <form onSubmit={(event) => {
            validateNote(event);
            this.props.history.push('/');
          }}>
            <legend>Create A Note</legend> 
            <div> 
              <label htmlFor='addNoteName'>Name</label>
              <input type='text' id='addNoteName' required/> 
              <label htmlFor='addNoteContent'>Content</label>
              <textarea id='addNoteContent' required></textarea>
              <select  id='selectFolder'>
                {contextState.folders.map(folder => {
                return( 
                  <option value={folder.id}>{folder.name}</option> 
                )
                })}
              </select> 
              <button type='submit'>Add Note</button>
            </div>
          </form> 
        )}
      </NotefulContext.Consumer> 
    )
  }
}

export default withRouter(AddNote);