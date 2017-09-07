import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

import AlbumDetail from '../../AlbumDetail/AlbumDetail';

class AlbumItem extends React.Component{
  constructor(props){
    super(props);

    this.state = { album: this.props.album };
  }

  render(){
    let album = this.state.album;
    let albumImage = 'http://icons.iconarchive.com/icons/martz90/hex/512/google-play-music-icon.png';

    if(album.image_url !== null){
      albumImage = album.image_url;
    }

    return(
      <div className='artist_album_item_container'>
        <div className='artist_album_item'>
          <img className='artist_album_item_img'
            src={ albumImage }></img>
          <Link to={`/albums/${album.id}`}>{album.name}</Link>
        </div>
        <div className='artist_album_songs'>
          <AlbumDetail albumId={album.id}/>
        </div>
      </div>
    )
  }
}

export default AlbumItem;
