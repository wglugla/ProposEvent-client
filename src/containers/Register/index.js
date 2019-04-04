import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/RegisterForm';

import { authAction } from '../../state/ducks/actions';

class Register extends Component {
  componentDidMount() {}
  render() {
    return (
      <RegisterForm
        register={this.props.registerRequest}
        registerDone={this.props.registerDone}
        registerFail={this.props.registerFail}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: userData => {
      userData.tags = userData.tags.substring(0, userData.tags.length - 1);
      dispatch(authAction.registerRequest(userData));
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
