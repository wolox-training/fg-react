import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Login } from './redux/login';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
