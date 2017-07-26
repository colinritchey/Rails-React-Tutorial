import React, { Component } from 'react';
import SongIndex from './SongIndex/SongIndex';
import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.App_header}>
          <h2>Rails and React Example</h2>
          <SongIndex/>
        </div>
      </div>
    );
  }
}

export default App;
