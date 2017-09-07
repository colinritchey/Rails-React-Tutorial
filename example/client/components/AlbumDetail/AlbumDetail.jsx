import React from 'react';

import { SongItem } from './SongItem/SongItem';
import { getAlbumDetail } from './actions';

import styles from './styles.css';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { album: {} };
  }

  componentDidMount(){
    let albumId = this.props.albumId || this.props.match.params.albumId;

    getAlbumDetail(albumId).then((res) => {
      this.setState({ album: res });
    });
  }

  render(){
    let album = this.state.album;
    let albumTitle = this.props.albumId ? '' : (<h3>{album.name}</h3>);

    if(album.songs === undefined){
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div>
          { albumTitle }
          <ol className='song_list_ordered'>
            {album.songs.map((song) =>
              <SongItem song={song} key={`song-${song.id}`}/>
            )}
          </ol>
        </div>
      )
    }
  }
}

export default AlbumDetail;
