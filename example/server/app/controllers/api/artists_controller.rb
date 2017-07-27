class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find(params[:id])
  end

  def index
    @artists = Artist.all
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
