export const getAllArtists = () => (
  $.ajax({url: 'http://localhost:3000/api/artists'})
);
