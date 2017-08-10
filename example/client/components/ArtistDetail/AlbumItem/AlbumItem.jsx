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
    let albumImage = 'https://i.imgur.com/CduSn7x.jpg';

    if(album.image_url !== null){
      albumImage = album.image_url;
    }

    return(
      <div className={styles.album_item_container}>
        <div className={styles.album_item}>
          <img className={styles.album_item_img}
            src={ albumImage }></img>
          <Link to={`/albums/${album.id}`}>{album.name}</Link>
        </div>
        <div className={styles.album_songs}>
          <AlbumDetail albumId={album.id}/>
        </div>
      </div>
    )
  }
}

export default AlbumItem;
