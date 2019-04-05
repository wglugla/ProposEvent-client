import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../../components/User';

import { userRequest } from '../../state/ducks/user/actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser(localStorage.proposEventToken);
  }
  render() {
    return (
      <React.Fragment>
        <User userinfo={this.props.user} />
        <Link to="/"> Znajdź nowe wydarzenia </Link>
        <Link to="/"> Edytuj profil </Link>
        <Link to="/"> Wyloguj się </Link>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(userRequest(id)),
});

const mapStateToProps = state => ({
  user: state.user.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
