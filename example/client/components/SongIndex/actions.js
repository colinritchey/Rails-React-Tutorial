export const getAllSongs = () => (
  $.ajax({url: 'http://localhost:3000/api/songs'})
)
