import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import SongIndex from './SongIndex/SongIndex';
import ArtistIndex from './ArtistIndex/ArtistIndex';
import ArtistDetail from './ArtistDetail/ArtistDetail';
import AlbumDetail from './AlbumDetail/AlbumDetail';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div className={styles.App}>
          <div className={styles.App_header}>
            <h2>Rails and React Example</h2>
              <div className={styles.content_container}>
                <Route exact path="/" component={ArtistIndex}/>
                <Route path="/artists/:artistId" component={ArtistDetail}/>
                <Route path="/albums/:albumId" component={AlbumDetail}/>
                <Route path="/songs" component={SongIndex}/>
              </div>
          </div>
        </div>

      </HashRouter>
    );
  }
}

export default App;
