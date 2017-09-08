import React from 'react';

import { SongItem } from './SongItem/SongItem';
import Form from './Form/Form';
import { getAlbumDetail } from './actions';
import { Link } from 'react-router-dom';

import styles from './styles.css';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = { album: {}, showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount(){
    let albumId = this.props.albumId || this.props.match.params.albumId;

    getAlbumDetail(albumId).then((res) => {
      this.setState({ album: res });
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    let album = this.state.album;
    let albumTitle = <h3>{album.name}</h3>;

    if(this.props.albumId){
      albumTitle = <Link to={`/albums/${album.id}`}>{album.name}</Link>;
    }

    if(album.songs === undefined){
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      let imageLink = album.image_url !== '' ? `${album.image_url}` : '';

      return(
        <div>
          <div className='album_header'>
            <img
              src={ imageLink }
              />
            <div className='album_side'>
              { albumTitle }
              <button
                className='add_button'
                onClick={this.handleOpenModal}>Add Song</button>
            </div>
          </div>

          <div className='form_container' >
            <Form
              album={this.state.album}
              showModal={this.state.showModal}
              closeModal={this.handleCloseModal}/>
          </div>

          <ol className='song_list_ordered'>
            {album.songs.map((song) =>
              <SongItem song={song} key={`song-${song.id}`}/>
            )}
          </ol>
        </div>
      )
    }
  }
}

export default AlbumDetail;
