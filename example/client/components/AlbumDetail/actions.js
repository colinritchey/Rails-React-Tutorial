export const getAlbumDetail = (albumId) => (
  $.ajax({url: `http://localhost:3000/api/albums/${albumId}`})
)

export const createNewSong = (song) => (
  $.ajax({
    url: `http://localhost:3000/api/songs`,
    method: 'POST',
    data: song
  })
)
