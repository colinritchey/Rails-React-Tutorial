import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  return(
    <div className={styles.artist_item_container}>
      <div className={styles.artist_item}>
        <img className={styles.artist_item_img}
          src='https://i.imgur.com/CduSn7x.jpg'></img>
        <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
      </div>
    </div>
  )
}

export default ArtistIndexItem;
