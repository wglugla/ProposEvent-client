import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from '../../components/LoginForm';

import { loginRequest, loadUser } from '../../state/ducks/auth/actions';
import { checkLocalToken } from '../../helpers/checkLocalToken';

class Login extends Component {
  componentDidMount() {
    if (checkLocalToken()) {
      this.props.loadUser(localStorage.proposEventToken);
    }
  }
  render() {
    if (!this.props.logged) {
      return <LoginForm login={this.props.loginRequest} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
          }}
        />
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => {
      dispatch(loginRequest(userData));
    },
    loadUser: token => {
      dispatch(loadUser(token));
    },
  };
};

const mapStateToProps = state => {
  return {
    logged: state.auth.loginStatus.logged,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
