import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

import { loginRequest } from '../../state/ducks/auth/actions';

class Login extends Component {
  componentDidMount() {}
  render() {
    return <LoginForm login={this.props.loginRequest} logged={this.props.logged} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: userData => {
      dispatch(loginRequest(userData));
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
