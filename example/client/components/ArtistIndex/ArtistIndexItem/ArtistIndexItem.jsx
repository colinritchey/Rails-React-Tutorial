import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  return(
    <div>
      <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
    </div>
  )
}

export default ArtistIndexItem;
