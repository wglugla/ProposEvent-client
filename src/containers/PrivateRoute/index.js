import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { Route } from 'react-router';

class PrivateRoute extends Component {
  render() {
    const { logged, Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          logged ? (
            <Component {...props} />
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

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => {
  return {
    logged: state.auth.loginStatus.logged,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
