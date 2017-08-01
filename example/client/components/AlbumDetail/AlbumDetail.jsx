import React from 'react';

import { SongItem } from './SongItem/SongItem';
import { getAlbumDetail } from './actions';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { album: {} };
  }

  componentDidMount(){
    let albumId = this.props.match.params.albumId;

    getAlbumDetail(albumId).then((res) => {
      this.setState({ album: res });
    });
  }

  render(){
    let album = this.state.album;
    if(album.songs === undefined){
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div>
          <h3>{album.name}</h3>
          {album.songs.map((song) =>
            <SongItem song={song} key={`song-${song.id}`}/>
          )}
        </div>
      )
    }
  }
}

export default AlbumDetail;
