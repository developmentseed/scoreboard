import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
  Mock Mapbox GL to not render anything
  because it requires a browser environment 
  to work.
*/
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
