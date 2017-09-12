import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import SongIndex from './SongIndex/SongIndex';
import ArtistIndex from './ArtistIndex/ArtistIndex';
import ArtistDetail from './ArtistDetail/ArtistDetail';
import AlbumDetail from './AlbumDetail/AlbumDetail';
import SongDetail from './SongDetail/SongDetail';

import { Navbar } from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <HashRouter>

        <div className='App'>
          <Navbar/>
          <div className='content_container'>
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
