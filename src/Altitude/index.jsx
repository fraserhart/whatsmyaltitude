import React from 'react';
import PropTypes from 'prop-types';

const Altitude = ({ altitude }) => (
  <div>
    {altitude}
  </div>
);

Altitude.defaultProps = {
  altitude: '',
};

Altitude.propTypes = {
  altitude: PropTypes.string,
};

export default Altitude;