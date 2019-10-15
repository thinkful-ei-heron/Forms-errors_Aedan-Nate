import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import store from './Store'
import SideBar from './Components/SideBar'
import DynamicFolder from './Components/DynamicFolder';
import NoteContent from './Components/NoteContent';
import NoteSidebar from './Components/NoteSidebar';

class App extends React.Component {

  state = {
    currentNote:{
      note: store.notes[0],
      folder: 'important',
    },
    sidebar: {},
    noteSection: [],
    folders: store.folders,
    notes: store.notes
  };

  folderClicked = (id) => {
    let newArray = this.state.notes.filter(note => note.folderId === id);
    this.setState({
      noteSection: newArray,
    })
  }

noteClicked = (id) => {
  let newNote = this.state.notes.find(note => note.id === id) 
  let currentFolder = this.state.folders.find(folder => folder.id === newNote.folderId);
  this.setState({
    currentNote: {
      note: newNote,
      folder: currentFolder.name,
    }
  })
}

  render() {

    return(
      <div className='app-div'>
        <NoteSidebar folder={this.state.currentNote.folder} />
        {/* <SideBar folders={this.state.folders} folderClicked={this.folderClicked}/> */}
        <div className='app-second-div'>
          <header>
            <h1>Noteful</h1>
          </header>
          {/* <HomePage noteClicked={this.noteClicked} folders={this.state.folders} notes={this.state.notes} />
          <DynamicFolder noteClicked= {this.noteClicked} notes = {this.state.noteSection}/> */}
          <NoteContent noteClicked ={this.noteClicked} currentNote={this.state.currentNote}/>
        </div>
      </div>
    );
  }
}

export default App;
