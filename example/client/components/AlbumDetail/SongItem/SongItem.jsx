import React from 'react';
import { Link } from 'react-router-dom';

export const SongItem = ({ song }) => {
  return(
    <div >
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
    </div>
  )
}
