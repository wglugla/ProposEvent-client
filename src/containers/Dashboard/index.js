import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../../components/User';
import EventsList from '../../components/EventsList';

import {
  userRequest,
  userEventsRequest,
  userSignedEventsRequest,
} from '../../state/ducks/user/actions';

import { logoutRequest } from '../../state/ducks/auth/actions';

class Dashboard extends Component {
  componentDidMount() {
    const token = localStorage.proposEventToken;
    this.props.fetchUser(token);
    this.props.fetchEvents(token);
    this.props.fetchSignedEvents(token);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <User userinfo={this.props.user} />
          <Link to="/events/create"> Stwórz nowe wydarzenie </Link>
          <Link to="/events"> Znajdź nowe wydarzenia </Link>
          <button onClick={this.props.logout}> Wyloguj się </button>
        </div>
        <div>
          <h2>Stworzone przez Ciebie</h2>
          <EventsList events={this.props.events} />
        </div>
        <div>
          <h2>Weźmiesz udział</h2>
          <EventsList events={this.props.signedEvents} />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: token => dispatch(userRequest(token)),
  fetchEvents: token => dispatch(userEventsRequest(token)),
  fetchSignedEvents: token => dispatch(userSignedEventsRequest(token)),
  logout: () => {
    dispatch(logoutRequest());
  },
});

const mapStateToProps = state => ({
  user: state.user.data,
  events: state.user.userEvents,
  signedEvents: state.user.userSignedEvents,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
