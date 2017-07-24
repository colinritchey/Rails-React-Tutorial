@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :name, :track_id
  end
end
