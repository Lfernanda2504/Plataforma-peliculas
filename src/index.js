import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './routers/AppRouters';

import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <AppRouters />,
  </ Provider>,
  document.getElementById('root')
);


