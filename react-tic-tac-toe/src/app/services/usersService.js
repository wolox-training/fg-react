import api from '../../app/config/api';

function getUsers() {
  return api.get('/users');
}

const userService = {
  login: (email, password) =>
    getUsers()
      .then(response => response.data.filter(e => e.email === email && e.password === password))
      .then(response => (resolve, reject) => {
        if (response.length === 1) {
          resolve(response[0].token);
        } else {
          reject();
        }
      })
};

export default userService;
