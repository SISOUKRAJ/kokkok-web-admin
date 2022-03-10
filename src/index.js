import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ScreenProvider from "./views/context/index";
import CDOptionProvider from "./views/context/getCarOption";

import './index.css';
import 'antd/dist/antd.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenProvider>
        <CDOptionProvider>
          <App />
        </CDOptionProvider>
      </ScreenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



