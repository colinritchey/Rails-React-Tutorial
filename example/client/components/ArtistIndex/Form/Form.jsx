import React from 'react';
import ReactModal from 'react-modal';
import {withRouter} from "react-router-dom";

import { createNewArtist } from '../actions';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '', imageUrl: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let artist = {
      artist: {
        name: this.state.name,
        image_url:  this.state.imageUrl
      }
    }
    createNewArtist(artist).then((res) => {
      console.log(res);
      this.props.closeModal();
      this.props.history.push(`/artists/${res.id}`);
    });
  }

  render(){
    let imageLink = this.state.imageUrl !== '' ? `${this.state.imageUrl}` : '';

    return(
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel='artist-form'>


        <form onSubmit={this.handleSubmit} className='create-container'>
          <img
            src={imageLink}
            />
          <label value='Image'>Image Link:
            <input
              type='text'
              value={this.state.imageUrl}
              onChange={(e) => this.setState({imageUrl: e.target.value})}
            />
          </label>

          <label>
            Name
            <input
              type='text'
              value={this.name}
              onChange={(e) => this.setState({ name: e.target.value })}>

            </input>
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
