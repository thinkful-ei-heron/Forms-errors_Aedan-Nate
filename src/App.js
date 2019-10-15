import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import store from './Store'
import SideBar from './Components/SideBar'
import DynamicFolder from './Components/DynamicFolder';

class App extends React.Component {

  state = {
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

  render() {

    return(
      <div className='app-div'>
        <SideBar folders={this.state.folders} folderClicked={this.folderClicked}/>
        <div className='app-second-div'>
          <header>
            <h1>Noteful</h1>
          </header>
          {/* <HomePage folders={this.state.folders} notes={this.state.notes} /> */}
          <DynamicFolder notes = {this.state.noteSection}/>
        </div>
      </div>
    );
  }
}

export default App;
