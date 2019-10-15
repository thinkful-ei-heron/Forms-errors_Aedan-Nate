import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import store from './Store'
import SideBar from './Components/SideBar'
import DynamicFolder from './Components/DynamicFolder';
import NoteContent from './Components/NoteContent';
import NoteSidebar from './Components/NoteSidebar';
import {Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {

  state = {
    currentNote:{
      note: {},
      folder: ''
    },
    currentFolder: null,
    noteSection: [],
    folders: store.folders,
    notes: store.notes,
    counter: {}
  };

  resetFolder() {
    this.setState({
      currentFolder:null
    })
  }

  folderClicked = (id) => {
    let newArray = this.state.notes.filter(note => note.folderId === id);
    this.setState({
      currentFolder:id,
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

  folderCounter = () => {
    let newArray = this.state.folders.map(folder => {
      let counter = 0;
      this.state.notes.map(note => {
        if(note.folderId === folder.id) counter++;
      })
      return {
        [folder.id]:counter
      };
    })

    let result = newArray.reduce((result, item) => {
      let key = Object.keys(item);
      result[key] = item[key];
      return result;
    }, {});

    this.setState({
      counter : result
    });
  }

  componentDidMount() {
    this.folderCounter();
  }

  render() {
    
    return(
      <div className='app-div'>
        <Switch>
          <Route 
            path='/note'
            render={() => (
              <NoteSidebar folder={this.state.currentNote.folder} />
            )}
          />

          <Route 
            path='/'
            render={() => (
              <SideBar folders={this.state.folders} folderClicked={this.folderClicked} counter={this.state.counter} currentFolder={this.state.currentFolder}/>
            )}
          />

        </Switch>
        
        <div className='app-second-div'>
          <header>
            <Link to="/" onClick={() => this.resetFolder()}>
              <h1>Noteful</h1>
            </Link>
          </header>

          <Route 
            exact 
            path='/' 
            render={() => (
              <HomePage 
                noteClicked={this.noteClicked} 
                folders={this.state.folders} 
                notes={this.state.notes} 
              />  
            )} 
          />

          <Route 
            path='/folder/:folderId' 
            render={() => (
              <DynamicFolder 
                noteClicked= {this.noteClicked} 
                notes = {this.state.noteSection}
              />
            )} 
          />

          <Route 
            path='/note/:noteId' 
            render={() => (
              <NoteContent 
                noteClicked ={this.noteClicked} 
                currentNote={this.state.currentNote}
              />
            )} 
          />

        </div>
      </div>
    );
  }
}

export default App;
