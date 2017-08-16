class AddImageUrlColumnToArtist < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :image_url, :string
  end
end
