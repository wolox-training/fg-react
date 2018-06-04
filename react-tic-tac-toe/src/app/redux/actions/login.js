export const CHANGE_LOGGED = 'LOGIN@@CHANGE_LOGGED';

export const changeLogged = logged => ({
  type: CHANGE_LOGGED,
  payload: {
    logged
  }
});
