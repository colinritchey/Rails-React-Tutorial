import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  let sampleImage = 'http://icons.iconarchive.com/icons/martz90/hex/512/google-play-music-icon.png';
  let artistImage = artist.image_url || sampleImage;

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
