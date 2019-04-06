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
        <div>
          <User userinfo={this.props.user} />
          <Link to="/events/create"> Stwórz nowe wydarzenie </Link>
          <Link to="/"> Znajdź nowe wydarzenia </Link>
          <Link to="/"> Edytuj profil </Link>
          <Link to="/"> Wyloguj się </Link>
        </div>
        <div>
          <h2>Stworzone przez Ciebie</h2>
        </div>
        <div>
          <h2>Weźmiesz udział</h2>
        </div>
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
