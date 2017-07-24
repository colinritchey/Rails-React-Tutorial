import React from 'react';
import SongIndexItem from './SongIndexItem/SongIndexItem';

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
        <div>
          { songList.map((song) => {

            return(
              <div key={`song-${song.id}`}>{song.name}</div>
            )

          }) }
        </div>
      )

    }

  }
}

export default SongIndex;
