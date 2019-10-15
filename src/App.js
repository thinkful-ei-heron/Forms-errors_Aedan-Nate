import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import store from './Store'
import SideBar from './Components/SideBar'

class App extends React.Component {

  state = {
    sidebar: {},
    noteSection: {},
    folders: store.folders,
    notes: store.notes
  };


  render() {

    return(
      <div className='app-div'>
        <SideBar folders={this.state.folders}/>
        <div className='app-second-div'>
          <header>
            <h1>Noteful</h1>
          </header>
          <HomePage folders={this.state.folders} notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
