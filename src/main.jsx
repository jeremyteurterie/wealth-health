import React from 'react';
import ReactDOM from 'react-dom/client';
// routes
import Router from './router';
// styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
