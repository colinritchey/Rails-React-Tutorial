import React from 'react';
import ArtistIndexItem from './ArtistIndexItem/ArtistIndexItem';
import Form from './Form/Form';

import { getAllArtists } from './actions';

class ArtistIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { artists: {}, showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    getAllArtists().then((res) => {
      this.setState({ artists: res });
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    let artists = Object.keys(this.state.artists).map((id) =>
      this.state.artists[id]
    );

    let isHidden = this.state.showForm ? '' : 'visibility: hidden;'
    let buttonText = this.state.showForm ? 'Cancel' : 'Add New'

    if(artists.length < 1){
      return(
        <div>
          Artists Loading...
        </div>
      )
    } else {
      return(
        <div>
          <div  className='form_container' >
            <Form
              showModal={this.state.showModal}
              closeModal={this.handleCloseModal}/>
          </div>
          <div className='artist_index_header'>
            <button
              className='add_button'
              onClick={this.handleOpenModal}>{buttonText}</button>
          </div>

          <div className='artist_index'>
            { artists.map((artist) => {
              return(
                <ArtistIndexItem
                  key={`artist-${artist.id}`}
                  artist={artist}/>
                )
              })
            }
          </div>
        </div>
      )
    }

  }
}

export default ArtistIndex;
