import React from 'react';

import styles from './styles.css';
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
    if(song === undefined){
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return(
        <div>
          <h3>{song.name}</h3>
          <p className={styles.song_lyrics}>{song.lyrics}</p>
        </div>
      )
    }
  }
}

export default SongDetail;
