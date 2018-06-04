import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import game from './game';
import login from './login';

export default combineReducers({
  game,
  login,
  form: formReducer
});
