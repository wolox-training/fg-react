import React from 'react';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import combineReducers from '../../redux/reducers/index';

import Login from './login';
import Game from './game';
import Dummy from './dummy';
import NavBar from './navBar';
import ProtectedRoute from './protectedRoute';

const store = createStore(combineReducers, applyMiddleware(thunk));

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/game" component={Game} />
    <ProtectedRoute path="/dummy" component={Dummy} />
  </Switch>
);

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <NavBar />
        <Routes />
      </div>
    </Provider>
  </Router>
);

export default App;
