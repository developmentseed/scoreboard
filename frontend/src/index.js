import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// the service worker is incompatible with our current deployment strategy
// we server the api, docs and the frontend from the same path "/scoreboard".
// our service worker sits in front of the path and tries to load even for
// pages that have nothing to do with the front (e.g. /scoreboard/api) and
// break the rendering in the browser. Until we fix this bug, we are commenting
// out the service workers
// registerServiceWorker();
