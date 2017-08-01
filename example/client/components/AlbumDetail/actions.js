export const getAlbumDetail = (albumId) => (
  $.ajax({url: `http://localhost:3000/api/albums/${albumId}`})
)
