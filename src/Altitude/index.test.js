import React from 'react';
import renderer from 'react-test-renderer';
import Altitude from '.';

it('displays the formatted altitude', () => {
  const wrapper = renderer.create(<Altitude altitude={5.6} />);
  expect(wrapper).toMatchSnapshot();
})
