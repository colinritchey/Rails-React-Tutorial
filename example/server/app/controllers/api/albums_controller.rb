class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def index
    @albums = Album.all
  end

  private

  def album_params
    params.require(:album).permit(:name, :artist)
  end
end
