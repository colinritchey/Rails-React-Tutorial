# Configuring Rails for a React Frontend

This tutorial will guide you how to set up a Ruby on Rails application for React by utilizing the JBuilder gem and Webpack.

This repo has an example application that is available for download.

### Good Bye Erb, Hello JBuilder

React is a Javascript Library that builds components that manage their own state, then compose them to make complex UIs. [source](https://facebook.github.io/react/)

```javascript
//client/components/SongIndex/actions.js
export const getAllSongs = () => (
  $.ajax({url: 'http://localhost:3000/api/songs'})
)
```

```javascript
//client/components/SongIndex/SongIndex.jsx
class SongIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { songs: {} };
  }

  componentDidMount(){
    getAllSongs().then((res) => {
      this.setState({ songs: res });
    });
  }

  render(){
    return(
      ...
    )
  }
}
```

As such Rails wont need to render html and instead we are going to set up our controllers to output JSON.

When you have your desired Model created go ahead and generate a controller with the "Api" namespace.
```bash
$ rails g controller Api::Songs
```

Within the routes.rb file wrap your main resources routes with the namespace api with a default json format (see below).

```ruby
# /server/config/routes.rb
Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :songs, only: [:index, :show, :create]
  end
end

```

Static page is the point of entry for our application and will need its own controller. However the controller wont have much going on, its important that it has a standard root.html.erb file with a html tag of an id our React components can build off of.

```html
<main id="root"></main>
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
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<App />, document.getElementById('root'));
});
```

```javascript
// client/components/App.jsx
import SongIndex from './SongIndex/SongIndex';

class App extends Component {
  render() {
    return (
      ...
    );
  }
}

export default App;
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

Loaders will read every file type specified and will convert them into modules. These are files can be .css, .html, .jsx, .jpeg, .etc.

A common one is babel-loader since it will convert ES6 javascript into ES5 (insuring all browsers can run ES6 javascript).

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
