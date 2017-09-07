export const getAllArtists = () => (
  $.ajax({url: 'http://localhost:3000/api/artists'})
);

export const createNewArtist = (artist) => (
  $.ajax({
    url: `http://localhost:3000/api/artists`,
    method: 'POST',
    data: artist
  })
)

export const updateArtist = (artist) => (
  $.ajax({
    url: `api/artists/${artist.id}`,
    method: 'PATCH',
    data: { artist }
  })
);

export const deleteArtist = (artist) => (
  $.ajax({
    url: `api/artists/${artist.id}`,
    method: 'DELETE'
  })
);
