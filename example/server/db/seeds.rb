# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.delete_all

Album.delete_all

Artist.delete_all

artist_1 = Artist.create!(name: "Led Zepplin")
artist_2 = Artist.create!(name: "Rolling Stones")

album_1 = Album.create!(name: "Led Zepplin", artist_id: artist_1.id)
album_2 = Album.create!(name: "Led Zepplin II", artist_id: artist_1.id)
album_3 = Album.create!(name: "Rolling Stones", artist_id: artist_2.id)

song_1 = Song.create!(
  name: "Baby I'm gonna leave you",
  album_id:  album_1.id,
)

song_2 = Song.create!(
  name: "Dazed and Confused",
  album_id:  album_1.id,
)

song_3 = Song.create!(
  name: "Whole Lotta Love",
  album_id:  album_2.id,
)

song_4 = Song.create!(
  name: "Route 66",
  album_id:  album_3.id,
)
