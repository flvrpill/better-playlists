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
        songs: ['City Girl', 'Fire and Bone', 'Boning Fire']
      },
      {
        name: 'Dad Stuff',
        songs: ['City Girl', 'Fire and Bone', 'Boning Fire']
      },
      {
        name: 'Kid Songs',
        songs: ['City Girl', 'Fire and Bone', 'Boning Fire']
      },
      {
        name: 'Big Country',
        songs: ['City Girl', 'Fire and Bone', 'Boning Fire']
      },
      {
        name: 'Big Country',
        songs: ['City Girl', 'Fire and Bone', 'Boning Fire']
      },
    ]
  },

}

class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img />
        <input type="text" />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>
            Song 1
            </li>
          <li>
            Song 2
            </li>
          <li>
            Song 3
            </li>
        </ul>
      </div>
    )
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ defaultStyle, width: '40%', color: '#ccc', display: "inline-block" }}>
        <h2>
          {this.props.playlists
            && this.props.playlists.length} Text
        </h2>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = { serverData: {} }
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
              </h1>}
                <Aggregate playlists={this.state.serverData.user
                  && this.state.serverData.user.playlists} />
                <Aggregate playlists={this.state.serverData.user
                  && this.state.serverData.user.playlists} />
                <Filter />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </div> : <h1 style={{defaultStyle,'text-align':'center'}}>Loading...</h1>
          }
      </div>
    )
  }
}
