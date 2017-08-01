export const getArtistDetail = (artistId) => (
  $.ajax({url: `http://localhost:3000/api/artists/${artistId}`})
)
