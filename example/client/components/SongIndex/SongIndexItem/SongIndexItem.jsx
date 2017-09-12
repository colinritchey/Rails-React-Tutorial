import React from 'react';

const SongIndexItem = ({ name }) => {
  return(
    <div className={styles.song_item}>
      { name }
    </div>
  )
}

export default SongIndexItem;
