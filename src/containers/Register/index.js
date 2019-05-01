import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/RegisterForm';

import { registerRequest, loadUserRequest } from '../../state/ducks/auth/actions';
import { tagsRequest } from '../../state/ducks/tags/actions';
import { checkLocalToken } from '../../helpers/checkLocalToken';
import { push } from 'connected-react-router';

class Register extends Component {
  componentDidMount() {
    if (checkLocalToken()) {
      this.props.loadUser(localStorage.proposEventToken);
      this.props.redirect();
    }
  }
  render() {
    return (
      <RegisterForm
        register={this.props.registerRequest}
        registerDone={this.props.registerDone}
        registerInfo={this.props.registerInfo}
      />
    );
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
    redirect: () => dispatch(push('/dashboard')),
  };
};

const mapStateToProps = state => ({
  registerDone: state.auth.registerStatus.done,
  registerInfo: state.auth.registerStatus,
  logged: state.auth.loginStatus.logged,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
