import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { logged, PrivateComponent, ...rest } = this.props;
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
