import React from 'react';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import combineReducers from '../../redux/reducers/index';

import Login from './login';
import Game from './game';

const store = createStore(combineReducers, applyMiddleware(thunk));

const Routes = () => (
  <div>
    <Route path="/" component={Login} />
    <Route path="/game" component={Game} />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  </Router>
);

export default App;
