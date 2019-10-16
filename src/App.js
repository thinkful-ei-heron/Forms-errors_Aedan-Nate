import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import store from './Store'
import SideBar from './Components/SideBar'
import DynamicFolder from './Components/DynamicFolder';
import NoteContent from './Components/NoteContent';
import NoteSidebar from './Components/NoteSidebar';
import {Route, Switch, Link} from 'react-router-dom';
import NotefulContext from './Components/NotefulContext';

class App extends React.Component {

  state = {
    currentNote:{
      note: {},
      folder: ''
    },
    currentFolder: null,
    counter: {},
    folders: store.folders,
    notes: store.notes,
  };

  resetFolder() {
    this.setState({
      currentFolder:null
    })
  }

  folderClicked = (id) => {
    this.setState({
      currentFolder:id,
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
        if(note.folderId === folder.id) {
        counter++;
      } return null;
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
        <NotefulContext.Provider value = {{
          contextState: this.state,
          resetFolder: this.resetFolder,
          folderClicked: this.folderClicked,
          noteClicked:this.noteClicked,
          folderCounter:this.folderCounter,
        }}>
          <Switch>
            <Route 
              path='/note'
              component={NoteSidebar}
            />

            <Route 
              path='/'
              component={SideBar}
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
              render={({match}) => (
                <DynamicFolder 
                  match={match}
                  folderClicked={this.folderClicked}
                  noteClicked= {this.noteClicked} 
                  notes = {this.state.notes}
                  currentFolder={this.state.currentFolder}
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
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
