import React from 'react';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { album: {} };
  }

  componentDidMount(){
    let albumId = this.props.match.params.albumId;

    $.ajax({url: `http://localhost:3000/api/albums/${albumId}`})
      .then((res) => {
        this.setState({ album: res });
      });
  }

  render(){
    let album = this.state.album;
    if(album.songs === undefined){
      return (
        <div>
          Album Detail
        </div>
      )
    } else {
      return(
        <div>
          <h3>{album.name}</h3>
          {album.songs.map((song) =>
            <div
              key={`song-${song.id}`}
              name={song.name}
              >
              {song.name}
            </div>
          )}
        </div>
      )
    }
  }
}

export default AlbumDetail;
