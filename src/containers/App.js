import React, { Component } from 'react';
import { sections, contact } from '../data'
import { TopbarContainer } from '../containers/topbarContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopbarContainer
          sections={sections}
          contact={contact}/>
      </div>
    );
  }
}

export default App;
