class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find(params[:id])
  end

  def index
    @artists = Artist.all
  end

  def create
    @artist = Artist.create!(artist_params)

    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def update
    @artist = Artist.find(params[:id])

    if @artist.update(artist_params)
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = Artist.find(params[:id])

    if @artist.destroy
      render :show
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :image_url)
  end
end
