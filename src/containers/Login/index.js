import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import LoginForm from '../../components/LoginForm';

import { loginRequest, loadUserRequest } from '../../state/ducks/auth/actions';
import { checkLocalToken } from '../../helpers/checkLocalToken';

class Login extends Component {
  componentDidMount() {
    if (checkLocalToken()) {
      this.props.loadUser(localStorage.proposEventToken);
      this.props.redirect();
    }
  }
  render() {
    return <LoginForm login={this.props.loginRequest} failed={this.props.failed} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => {
      dispatch(loginRequest(userData));
    },
    loadUser: token => {
      dispatch(loadUserRequest(token));
    },
    redirect: () => dispatch(push('/dashboard')),
  };
};

const mapStateToProps = state => {
  return {
    logged: state.auth.loginStatus.logged,
    failed: state.auth.loginStatus.fail,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
