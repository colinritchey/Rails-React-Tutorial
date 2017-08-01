import React from 'react';
import { Link } from 'react-router-dom';

export const AlbumItem = ({ album }) => {
  return(
    <div>
      <Link to={`/albums/${album.id}`}>{album.name}</Link>
    </div>
  )
}
