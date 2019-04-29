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
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 5rem 3rem;
  line-height: 2;
`;

const StyledButton = styled.button`
  margin: 1rem 0;
`;

class Dashboard extends Component {
  componentDidMount() {
    const token = localStorage.proposEventToken;
    this.props.fetchUser(token);
    this.props.fetchEvents(token);
    this.props.fetchSignedEvents(token);
  }
  render() {
    return (
      <StyledSection className="section columns is-variable is-8">
        <div className="column">
          <User userinfo={this.props.user} />
          <Link to="/events"> Znajdź nowe wydarzenia </Link>
          <Link to="/events/create"> Stwórz nowe wydarzenie </Link>
          <StyledButton className="button is-info" onClick={this.props.logout}>
            Wyloguj się
          </StyledButton>
        </div>
        <div className="columns column is-two-thirds">
          <div className="column is-half">
            <h1 className="title is-4">Stworzone przez Ciebie</h1>
            <EventsList events={this.props.events} />
          </div>
          <div className="column is-half">
            <h1 className="title is-4">Weźmiesz udział</h1>
            <EventsList events={this.props.signedEvents} />
          </div>
        </div>
      </StyledSection>
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
