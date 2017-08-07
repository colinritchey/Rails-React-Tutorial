import React from 'react';

class SongIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { songs: {} };
  }

  componentDidMount(){
    
  }

  render(){
    let songList = Object.keys(this.state.songs).map((id) => song[id]);

    return(
      <div>
        {songList.map((song) => (
          <div>{song.name}</div>
        ))}
      </div>
    )
  }

}
