/* 
  Mock Mapbox GL to not render anything
  because it requires a browser environment 
  to work.
*/
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));

jest.mock('next/router')
