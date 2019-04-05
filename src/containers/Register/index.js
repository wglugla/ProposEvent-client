import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import RegisterForm from '../../components/RegisterForm';

import { registerRequest } from '../../state/ducks/auth/actions';

const checkLocalToken = () => {
  if (localStorage.proposEventToken) {
    return true;
  }
  return false;
};

class Register extends Component {
  componentDidMount() {}
  render() {
    if (checkLocalToken) {
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
  };
};

const mapStateToProps = state => ({
  registerDone: state.auth.registerStatus.done,
  registerFail: state.auth.registerStatus.fail,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
