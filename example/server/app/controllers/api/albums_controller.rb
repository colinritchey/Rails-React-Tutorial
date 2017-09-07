class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def index
    @albums = Album.all
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])

    if @album.destroy
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:name, :artist_id, :image_url)
  end
end
