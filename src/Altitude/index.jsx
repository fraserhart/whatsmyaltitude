import React from 'react';
import PropTypes from 'prop-types';
import { ERROR_GETTING_LOCATION, REFUSED, WAITING_FOR_ELEVATION_DATA, WAITING_FOR_LOCATION } from '../Constants';

const Altitude = ({ altitude }) => {
  const formattedAltitude = () => {
    if (altitude !== WAITING_FOR_LOCATION
        && altitude !== ERROR_GETTING_LOCATION
        && altitude !== REFUSED
        && altitude !== WAITING_FOR_ELEVATION_DATA) {
      const meterNumber = Number(altitude);
      const feetNumber = meterNumber * 3.28;
      return `${meterNumber.toFixed(2)} meters / ${feetNumber.toFixed(2)} feet`;
    }
    return altitude;
  };
  return (
    <h2>
      { formattedAltitude() }
    </h2>
  );
};

Altitude.defaultProps = {
  altitude: WAITING_FOR_LOCATION,
};

Altitude.propTypes = {
  altitude: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Altitude;
