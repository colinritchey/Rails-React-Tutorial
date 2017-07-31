import React from 'react';
import styles from './styles.css';

const SongIndexItem = ({ name }) => {
  return(
    <div className={styles.song_item}>
      { name }
    </div>
  )
}

export default SongIndexItem;
