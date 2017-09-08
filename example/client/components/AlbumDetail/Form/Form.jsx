import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from "react-router-dom";

import { createNewSong } from '../actions';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '', lyrics: '', embedded_url: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let songEmbeddedId = this.state.embedded_url.split('?v=')[1];

    let song = {
      song: {
        name: this.state.name,
        lyrics: this.state.lyrics,
        embedded_url: songEmbeddedId,
        album_id: this.props.album.id
      }
    }
    createNewSong(song).then((res) => {
      this.props.closeModal();
      this.props.history.push(`/songs/${res.id}`);
    });
  }

  trimEm

  render(){
    let imageLink = this.state.imageUrl !== '' ? `${this.state.imageUrl}` : '';

    return(
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel='song-form'>


        <form onSubmit={this.handleSubmit} className='create-container'>

          <label>
            Name
            <input
              type='text'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}>

            </input>
          </label>

          <label>
            Youtube link
            <input
              type='text'
              value={this.state.embedded_url}
              onChange={(e) => this.setState({ embedded_url: e.target.value })}>

            </input>
          </label>

          <label value='Lyrics'>Lyrics
            <textarea
              value={this.state.lyrics}
              onChange={(e) => this.setState({lyrics: e.target.value})}
              />
          </label>

          <div className='form-buttons'>
            <a
              className='submit-button'
              onClick={this.handleSubmit}>Submit</a>

            <a className='cancel-button'
              onClick={() => this.props.closeModal()}>Cancel</a>
          </div>
        </form>


      </ReactModal>
    )
  }
}

export default withRouter(Form);
