import React from 'react';
import { Link } from 'react-router-dom';

export const SongItem = ({ song }) => {
  return(
    <li className='song_item'>
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
    </li>
  )
}
