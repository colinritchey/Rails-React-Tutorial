import React from 'react';
import styles from './styles.css';
import ArtistIndexItem from './ArtistIndexItem/ArtistIndexItem';

class ArtistIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = { artists: {} };
  }

  componentDidMount(){
    $.ajax({url: 'http://localhost:3000/api/artists'})
      .then((res) => {
        this.setState({ artists: res });
      });
  }

  render(){
    let artists = Object.keys(this.state.artists).map((id) =>
      this.state.artists[id]
    );

    if(artists.length < 1){
      return(
        <div>
          Artists Loading...
        </div>
      )
    } else {
      return(
        <div >
          { artists.map((artist) => {
            return(
              <ArtistIndexItem
                key={`artist-${artist.id}`}
                artist={artist}/>
              )
            })
          }
        </div>
      )
    }

  }
}

export default ArtistIndex;
