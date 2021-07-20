import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routers/Routers';
import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <Router />,
  </ Provider>,
  document.getElementById('root')
);


