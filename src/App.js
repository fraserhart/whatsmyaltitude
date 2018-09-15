import React, { Component } from 'react';
import './App.css';
import Altitude from './Altitude';
import { ERROR_GETTING_LOCATION, REFUSED, WAITING_FOR_LOCATION, WAITING_FOR_ELEVATION_DATA } from './Constants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {elevation: WAITING_FOR_LOCATION};
  }

  componentDidMount() {
    this.getCurrentAltitude();
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getCurrentAltitude() {
    this.getPosition()
      .then((position) => {
        this.setState({ elevation: WAITING_FOR_ELEVATION_DATA });
        const elevator = new window.google.maps.ElevationService();
        elevator.getElevationForLocations({
          locations: [
            {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          ],
        }, (elevations) => {
          if (elevations && elevations[0]){
            this.setState({ elevation: elevations[0].elevation });
          } else {
            this.setState({ elevation: REFUSED });
            console.error('ERROR', elevations);
          }

        });
      })
      .catch((error) => {
        this.setState({ elevation: ERROR_GETTING_LOCATION });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What&rsquo;s my altitude?</h1>
        </header>
        <Altitude altitude={this.state.elevation} />
        <footer>
          <small>by <a href="http://www.fraser-hart.co.uk">Fraser Hart</a></small>
        </footer>
      </div>
    );
  }
}

export default App;
