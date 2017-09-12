import React from 'react';
import { Link } from 'react-router-dom';

import AlbumItem from './AlbumItem/AlbumItem';
import Form from './Form/Form';

import { getArtistDetail } from './actions';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { artist: {}, showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    let artistId = this.props.match.params.artistId;

    getArtistDetail(artistId).then((res) => {
      this.setState({ artist: res });
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    let artist = this.state.artist;
    if(artist.albums === undefined){
      return (
        <div>
          ...Loading
        </div>
      )
    } else {
      return(
        <div className='artist_album_index'>
          <div className='artist_header'>
            <h3>{artist.name}</h3>
            <button
              className='add_button'
              onClick={this.handleOpenModal}>Add Album</button>
          </div>

            <div className='form_container' >
              <Form
                artist={this.state.artist}
                showModal={this.state.showModal}
                closeModal={this.handleCloseModal}/>
            </div>


        {artist.albums.map((album) =>
            <AlbumItem album={album} key={`album-${album.id}`}/>
          )}
        </div>
      )
    }
  }
}

export default ArtistDetail;
