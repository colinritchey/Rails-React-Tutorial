import React from 'react';
import { Link } from 'react-router-dom';

import { AlbumItem } from './AlbumItem/AlbumItem';
import { getArtistDetail } from './actions';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { artist: {} };
  }

  componentDidMount(){
    let artistId = this.props.match.params.artistId;

    getArtistDetail(artistId).then((res) => {
      this.setState({ artist: res });
    });
  }

  render(){
    let artist = this.state.artist;
    if(artist.albums === undefined){
      return (
        <div>
          Artist Detail
        </div>
      )
    } else {
      return(
        <div>
          <h3>{artist.name}</h3>
          {artist.albums.map((album) =>
            <AlbumItem album={album} key={`album-${album.id}`}/>
          )}
        </div>
      )
    }
  }
}

export default ArtistDetail;
