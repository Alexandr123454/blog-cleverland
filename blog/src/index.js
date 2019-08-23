import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Storage from './components/Storage';

ReactDOM.render(
  <HashRouter>
    <Storage />
  </HashRouter>,
  document.getElementById('root')
);
