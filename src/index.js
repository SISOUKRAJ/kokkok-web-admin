import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import BirdEyeProvider from "./views/context/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BirdEyeProvider>
        <App />
      </BirdEyeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



