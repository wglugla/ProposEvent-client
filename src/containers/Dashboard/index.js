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

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser(localStorage.proposEventToken);
    this.props.fetchEvents(localStorage.proposEventToken);
    this.props.fetchSignedEvents(localStorage.proposEventToken);
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
          <EventsList events={this.props.events} />
        </div>
        <div>
          <h2>Weźmiesz udział</h2>
          <EventsList events={this.props.signedEvents} />
        </div>
        <p>{this.props.location.state ? this.props.location.state.redirectText : ''}</p>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: token => dispatch(userRequest(token)),
  fetchEvents: token => dispatch(userEventsRequest(token)),
  fetchSignedEvents: token => dispatch(userSignedEventsRequest(token)),
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
