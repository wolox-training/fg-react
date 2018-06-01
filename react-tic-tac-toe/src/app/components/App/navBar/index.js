import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeLogged } from '../../../redux/actions/login';

import styles from './styles.scss';

class NavBar extends React.Component {
  logOut = () => {
    localStorage.setItem('token', '');
    this.props.changeLogged(false);
  };

  render() {
    if (!this.props.logged) {
      return <Redirect to="/login" />;
    }
    return (
      <nav className={styles.navBar}>
        <div>
          <button onClick={this.logOut}>Logout</button>
          <button>
            <NavLink to="/dummy">Dummy</NavLink>
          </button>
          <button>
            <NavLink to="/game">Game</NavLink>
          </button>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
