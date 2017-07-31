import React from 'react';
import { Link } from 'react-router-dom';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { artist: {} };
  }

  componentDidMount(){
    let artistId = this.props.match.params.artistId;

    $.ajax({url: `http://localhost:3000/api/artists/${artistId}`})
      .then((res) => {
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
            <div
              key={`album-${album.id}`}
              name={album.name}
              >
              {album.name}
            </div>
          )}
        </div>
      )
    }
  }
}

export default ArtistDetail;
