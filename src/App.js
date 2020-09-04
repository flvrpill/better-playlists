import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: "#fff"

}


class Filter extends Component {
  render() {
    return (
      <div style={{ defaultStyle }}>
        <img  />
        <input type="text" />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img />
        <h3>Playlist Name Yup</h3>
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
          Number Text
        </h2>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ color: '#fff' }}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    )
  }
}
