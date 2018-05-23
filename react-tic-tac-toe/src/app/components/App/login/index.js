import React from 'react';
import { Redirect } from 'react-router-dom';

import userService from '../../../services/usersService';

import MyForm from './layout';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      error: false
    };
  }

  handleSubmit = values => {
    userService
      .login(values.email, values.password)
      .then(token => {
        localStorage.setItem('token', token);
        this.setState({
          token
        });
        this.render();
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  };

  render = () => {
    if (this.state.token || localStorage.getItem('token')) {
      return <Redirect to="/game" />;
    }
    if (this.state.error) {
      return <MyForm onSubmit={this.handleSubmit} loginError="true" />;
    }

    return <MyForm onSubmit={this.handleSubmit} />;
  };
}

export default Login;
