class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
  end

  private

  def song_params
    params.require(:song).permit(:name, :album, :artist, :track_id)
  end
end
