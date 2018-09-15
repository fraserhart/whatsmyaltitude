import React, { Component } from 'react';
import './App.css';
import Altitude from './Altitude';

class App extends Component {

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getCurrentAltitude() {
    this.getPosition()
      .then((position) => {
        console.log(position);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What&rsquo;s my altitude?</h1>
        </header>
        <button onClick={this.getCurrentAltitude.bind(this)}>Get my altitude</button>
        <Altitude />
      </div>
    );
  }
}

export default App;
