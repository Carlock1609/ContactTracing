import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This grabs the root div on the index.html and applies ALL the react?
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

