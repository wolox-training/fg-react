import React from 'react';
import { NavLink } from 'react-router-dom';
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
  changeLogged: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  changeLogged: logged => {
    dispatch(changeLogged(logged));
  }
});

export default connect(null, mapDispatchToProps)(NavBar);
