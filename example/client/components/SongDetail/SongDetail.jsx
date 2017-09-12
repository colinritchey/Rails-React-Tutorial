import React from 'react';
import { Link } from 'react-router-dom';

import { getSongDetail } from './actions';

class SongDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { song: {} };
  }

  componentDidMount(){
    let songId = this.props.match.params.songId;

    getSongDetail(songId).then((res) => {
      this.setState({ song: res });
    });
  }

  render(){
    let song = this.state.song;
    if(song.album === undefined){
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div className='song_detail'>
          <div className='album_artist_container'>
            <div className='song_vid'>
              <iframe width="350" height="180"
                src={`https://www.youtube.com/embed/${song.embedded_url}`}
                ></iframe>
            </div>

            <div className='album_artist'>
              <Link to={`/albums/${song.album.id}`}
                className='song_album'
                >{song.album.name}</Link>

              <Link to={`/artists/${song.artist.id}`}
                className='song_artist'
                >{song.artist.name}</Link>

            </div>
          </div>
          <h3>{song.name}</h3>
          <p className='song_lyrics'>{song.lyrics}</p>
        </div>
      )
    }
  }
}

export default SongDetail;
