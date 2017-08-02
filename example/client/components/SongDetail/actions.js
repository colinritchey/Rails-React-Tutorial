export const getSongDetail = (songId) => (
  $.ajax({url: `http://localhost:3000/api/songs/${songId}`})
)
