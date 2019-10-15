import React from 'react';
import './NoteSidebar.css';
import {withRouter} from 'react-router-dom';

function NoteSidebar(props) {
  return (
    <div className="note-sidebar">
      <button className="backButton" onClick={() => props.history.goBack()}>
        Back
      </button>
      <h2 className="verticalText">{props.folder}</h2>
    </div>
  )
}

export default withRouter(NoteSidebar);