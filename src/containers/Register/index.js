import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/RegisterForm';

import { authAction } from '../../state/ducks/actions';

class Register extends Component {
  componentDidMount() {}
  render() {
    return <RegisterForm register={this.props.registerRequest} />;
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

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
