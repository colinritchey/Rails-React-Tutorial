import React from 'react';
import SongIndexItem from './SongIndexItem/SongIndexItem';
import styles from './styles.css';

class SongIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { songs: {} };
  }

  componentDidMount(){
    $.ajax({url: 'http://localhost:3000/api/songs'})
      .then((res) => {
        this.setState({ songs: res });
      });
  }

  render(){
    let songList = Object.keys(this.state.songs).map((id) =>
      this.state.songs[id]
    );

    if(songList.length < 1){

      return(
        <div>
          Loading...
        </div>
      )

    } else {

      return(
        <div className={styles.song_index}>
          { songList.map((song) => {
            return(
              <SongIndexItem
                key={`song-${song.id}`}
                name={song.name}/>
              )
            })
          }
        </div>
      )

    }

  }
}

export default SongIndex;
