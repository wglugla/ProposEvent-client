import React, { Component } from 'react';

import { connect } from 'react-redux';

import User from '../../components/User';

import { userRequest } from '../../state/ducks/user/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser(localStorage.proposEventToken);
  }
  render() {
    return (
      <React.Fragment>
        {console.log('XD', this.props)}
        <User userinfo={this.props.user} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(userRequest(id)),
});

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
