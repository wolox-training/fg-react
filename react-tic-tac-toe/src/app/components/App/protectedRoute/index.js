import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ Component, logged, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      logged ? (
        <Component Component />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  logged: PropTypes.bool,
  Component: PropTypes.Componenet
};

const mapStateToProps = state => ({
  logged: state.login.logged
});

export default connect(mapStateToProps)(ProtectedRoute);
