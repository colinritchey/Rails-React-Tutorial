import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  let artistImage = artist.image_url || 'https://i.imgur.com/CduSn7x.jpg';

  return(
    <div className='artist_item_container'>
      <div className='artist_item'>
        <img className='artist_item_img'
          src={ artistImage }></img>
        <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
      </div>
    </div>
  )
}

export default ArtistIndexItem;
