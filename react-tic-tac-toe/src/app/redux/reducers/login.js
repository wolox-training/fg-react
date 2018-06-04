import { CHANGE_LOGGED } from '../actions/login';

const initialState = {
  logged: false
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOGGED:
      return {
        logged: action.payload.logged
      };
    default:
      return state;
  }
}
