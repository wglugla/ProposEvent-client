import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadUserRequest } from '../../state/ducks/auth/actions';

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.verify(localStorage.proposEventToken);
  }
  render() {
    const { logged, userData, PrivateComponent, ...rest } = this.props;
    if (logged === null) {
      return <p> Autoryzacja trwa..</p>;
    }
    if (logged && userData === null) {
      return <p> Trwa wczytywanie danych..</p>;
    } else {
      return (
        <Route
          {...rest}
          render={props =>
            logged ? (
              <PrivateComponent {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  verify: token => dispatch(loadUserRequest(token)),
});
const mapStateToProps = state => {
  return {
    logged: state.auth.loginStatus.logged,
    userData: state.user.data,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
