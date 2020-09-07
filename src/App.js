import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: "#fff"
}
let fakeServerData = {
  user: {
    name: 'Ryan',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          { name: 'City Girl', duration: 1232 },
        { name: 'Fire and Bone', duration: 1232 },
        { name: 'Boning Fire', duration: 1232 },]

      },

      {
        name: 'My Favorites',
        songs: [{ name: 'City Girl', duration: 1232 },
        { name: 'Fire and Bone', duration: 1232 },
        { name: 'Boning Fire', duration: 1232 },]

      },
      {
        name: 'Dad Songs',
        songs: [{ name: 'City Girl', duration: 1232 },
        { name: 'Fire and Bone', duration: 1232 },
        { name: 'Boning Fire', duration: 1232 },]

      },
      {
        name: 'Huge Country',
        songs: [{ name: 'City Girl', duration: 1232 },
        { name: 'Fire and Bone', duration: 1232 },
        { name: 'Boning Fire', duration: 1232 },]

      },

    ]
  },

}

class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img />
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div style={{ width: '25%', display: 'inline-block', backgroundColor: 'white', marginRight: '20px', marginTop: '10px', paddingLeft: '10px', width: '220px', paddingTop: '10px'}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
            {playlist.songs.map(song =>
          <li>{song.name}</li>)}
        </ul>
      </div>
    )
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ defaultStyle, width: '40%', color: '#ccc', display: "inline-block" }}>
        <h2>
          {this.props.playlists && this.props.playlists.length} playlists
        </h2>
      </div>
    )
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{ defaultStyle, width: '40%', color: '#ccc', display: "inline-block" }}>
        <h2>
          {Math.round(totalDuration / 60)} hours
        </h2>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = { 
      serverData: {},
      filterString: 'Favor'
  }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 500);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{ color: '#fff' }}>
              {this.state.serverData.user.name}'s Playlists
              </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter onTextChange={text => 
            this.setState({filterString: text})}/>}
            {
              this.state.serverData.user.playlists.filter(playlist =>
                playlist.name.toLowerCase().includes(
                  this.state.filterString.toLowerCase())
              ).map(playlist =>
                <Playlist playlist={playlist}/>
              )}
          </div> : <h1 style={{ defaultStyle, 'text-align': 'center' }}>Loading...</h1>
        }
      </div>
    )
  }
}
