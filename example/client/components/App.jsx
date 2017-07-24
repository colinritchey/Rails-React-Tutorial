import React, { Component } from 'react';
import SongIndex from './SongIndex/SongIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rails and React Example</h2>
          <SongIndex/>
        </div>
      </div>
    );
  }
}

export default App;
