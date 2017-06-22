# Configuring Rails for a React/Redux Frontend

This tutorial will guide you how to set up your Ruby on Rails application for React with Redux by utilizing the JBuilder gem and Webpack.

This repo has an example app that you are free to clone and mess around with.

### Good Bye Erb, Hello JBuilder

React with Redux works by manipulating one single root html element (usually a div) and will append components based on what is currently in the Redux store (and if you are using react-router whichever component is pointed to by the route path).

As such Rails wont need its Views to be creating static routes. Instead we are going to set up our controllers as api controllers and the associated views as jbuilder files.

```bash
$ rails g controller Api::Songs
```

```ruby
# /server/config/routes
Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :songs, only: [:index, :show, :create]
  end
end

```

```ruby

#/server/
class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
  end

  private

  def song_params
    params.require(:song).permit(:name, :album, :artist, :track_id)
  end
end
```
