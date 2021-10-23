import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// the <App /> MUST BE ATTACHED to the </React.S..> 
// TO PREVENT UN CENTERED CONTENT 
ReactDOM.render(
  <React.StrictMode>
    <App /></React.StrictMode>, document.getElementById('root'));

reportWebVitals();
