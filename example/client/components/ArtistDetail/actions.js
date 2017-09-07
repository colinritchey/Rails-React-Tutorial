export const getArtistDetail = (artistId) => (
  $.ajax({url: `http://localhost:3000/api/artists/${artistId}`})
)

export const createNewAblum = (album) => (
  $.ajax({
    url: `http://localhost:3000/api/albums`,
    method: 'POST',
    data: album
  })
)
