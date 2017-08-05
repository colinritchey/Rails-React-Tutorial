import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import SongIndex from './SongIndex/SongIndex';
import ArtistIndex from './ArtistIndex/ArtistIndex';
import ArtistDetail from './ArtistDetail/ArtistDetail';
import AlbumDetail from './AlbumDetail/AlbumDetail';
import SongDetail from './SongDetail/SongDetail';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div className={styles.App}>
          <div className={styles.App_header}>
            <div className={styles.header_content}>
              <h2><Link to={'/'}>Rails and React Example</Link></h2>
            </div>
          </div>
          <div className={styles.content_container}>
            <Route exact path="/" component={ArtistIndex}/>
            <Route path="/artists/:artistId" component={ArtistDetail}/>
            <Route path="/albums/:albumId" component={AlbumDetail}/>
            <Route path="/songs/:songId" component={SongDetail}/>
          </div>

        </div>

      </HashRouter>
    );
  }
}

export default App;
