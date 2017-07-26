# Configuring Rails for a React/Redux Frontend

This tutorial will guide you how to set up your Ruby on Rails application for React with Redux by utilizing the JBuilder gem and Webpack.

This repo has an example app that you are free to clone and mess around with.

### Good Bye Erb, Hello JBuilder

React with Redux works by manipulating one single root html element (usually a div) and will append components based on what is currently in the Redux store (and if you are using react-router whichever component is pointed to by the route path).

As such Rails wont need its Views to be creating static routes. Instead we are going to set up our controllers as api controllers and the associated views as jbuilder files.

When you have your desired Model created go ahead and generate a controller with the "Api" namespace.
```bash
$ rails g controller Api::Songs
```

Within the routes.rb file wrap your main resources routes with the namespace api with a default json format (see below).

```ruby
# /server/config/routes.rb
Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :songs, only: [:index, :show, :create]
  end
end

```

```ruby

#/server/app/controller/api/songs_controller.rb
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
Jbuilder has a quite a few functions but in this tutorial we'll focus on extract and partial. json.extract! will take the first argument, the Model(s), and pluck the information provided by the subsequent arguments.

```ruby
# /server/app/views/api/songs/show.json.jbuilder
json.extract! @song, :id, :name, :track_id
```

### Webpack Fundementals

Most of this section comes directly from the Webpack Documentations [here](https://webpack.js.org/concepts/)

There are 4 major components to Webpack: Entry, Output, Loaders and Plugins.

##### Entry

Entry is the point of contact and will load dependencies throughout the chain of imports. For example, our index.js needs to import our App React component and within that component needs SongIndex component (and so on).

```javascript
// client/index.js
import App from './components/App';
```

```javascript
// client/components/App.jsx
import SongIndex from './SongIndex/SongIndex';
```

```javascript
// client/webpack.config.js
entry: "./index.js",
```

##### Output

Output is where the bundle.js file will be located, in our case we want to store it into our assests folder in our Rails app.

```javascript
// client/webpack.config.js

output: {
  filename: "../server/app/assets/javascripts/bundle.js"
},
```

We essentially want to put our bundle.js into our main html file and Rail's 'javascript_include_tag' method will do that for us in the application html layout.

```html
// server/app/views/layouts/application.html.erb
<head>
  <title>Server</title>
  <%= csrf_meta_tags %>

  <%= stylesheet_link_tag    'application', media: 'all' %>
  <%= javascript_include_tag 'application' %>
</head>
```

Note: application.js is found in the assests/javascripts folder and will include everything in it's directory and Jquery.

##### Loaders

Loaders will read every file type specified and will convert them into modules. These are files can be .css, .html, or even .jsx.

Some common ones are css-loader and style-loader, but for our React Components we will want to use babel-loader.

```javascript
// client/webpack.config.js

module: {
  loaders: [
    {
      test: [/\.jsx?$/, /\.js?$/],
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
},
```

This loader setting comes from the Twillio blog on "Setting up React for ES6 with Webpack and Babel" ([source](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html))

##### Plugin
Plugins allow us to add additional functionality when bundling our files. (In our case we wont be using them but they're nice to have.)

##### Example

```javascript
// webpack.config.js

module.exports = {
  entry: "./index.js",
  output: {
    filename: "../server/app/assets/javascripts/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
```

Within the client directory run:

```bash
$ webpack -w
```

This will tell webpack to "watch" your files and will output a bundle.js file. The watch command will run continuously, so if you make a change that the entry file can touch then webpack will rebundle those files.

If everything is set up correctly you should be able to run your server and see React working.

Note: You generally want to gitignore bundle.js files as they can be very large. If you are hosting your application on a service like Heroku you can add a "postinstall" script that will run webpack.

```javascript
// package.json

"scripts": {
  "postinstall": "webpack"
}
```
