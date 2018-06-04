import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userService from '../../../services/usersService';
import { changeLogged } from '../../../redux/actions/login';

import MyForm from './layout';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  handleSubmit = values => {
    userService
      .login(values.email, values.password)
      .then(token => {
        localStorage.setItem('token', token);
        this.props.changeLogged(true);
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    if (this.props.logged) {
      return <Redirect to="/game" />;
    }
    return <MyForm onSubmit={this.handleSubmit} loginError={this.state.error} />;
  }
}

Login.propTypes = {
  logged: PropTypes.bool,
  changeLogged: PropTypes.func
};

const mapStateToProps = state => ({
  logged: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  changeLogged: logged => {
    dispatch(changeLogged(logged));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
