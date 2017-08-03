class AddEmbeddedUrlToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :embedded_url, :string
  end
end
