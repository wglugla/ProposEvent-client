import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import RegisterForm from '../../components/RegisterForm';

import { registerRequest, loadUserRequest } from '../../state/ducks/auth/actions';
import { tagsRequest } from '../../state/ducks/tags/actions';
import { checkLocalToken } from '../../helpers/checkLocalToken';

class Register extends Component {
  componentDidMount() {
    if (checkLocalToken()) {
      this.props.loadUser(localStorage.proposEventToken);
    }
  }
  render() {
    if (!this.props.logged) {
      return (
        <RegisterForm
          register={this.props.registerRequest}
          registerDone={this.props.registerDone}
          registerFail={this.props.registerFail}
        />
      );
    } else {
      return <Redirect to="/dashboard" />;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: userData => {
      userData.tags = userData.tags.substring(0, userData.tags.length - 1);
      dispatch(registerRequest(userData));
    },
    loadUser: token => {
      dispatch(loadUserRequest(token));
    },
    getTags: () => dispatch(tagsRequest()),
  };
};

const mapStateToProps = state => ({
  registerDone: state.auth.registerStatus.done,
  registerFail: state.auth.registerStatus.fail,
  logged: state.auth.loginStatus.logged,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
