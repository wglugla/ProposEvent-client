import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEventsRequest, matchEventsRequest } from '../../state/ducks/event/actions';
import EventInfo from '../../components/EventInfo';

class EventSearch extends Component {
  componentDidMount() {
    const token = localStorage.proposEventToken;
    const { userId, tags } = this.props;
    this.props.fetchEvents(token, userId, tags);
  }
  render() {
    return (
      <React.Fragment>
        <h1> Wyszukiwarka eventów </h1>
        <h2> Twoje tagi: </h2>
        {this.props.tags ? (
          JSON.parse(this.props.tags).map(el => <li key={el}> {el} </li>)
        ) : (
          <p> Ładowanie tagów </p>
        )}
        <h2> Znalezione wydarzenia: </h2>
        {this.props.proposedEvents ? (
          this.props.proposedEvents.map(event => <EventInfo key={event.event_id} event={event} />)
        ) : (
          <p> Wyszukiwanie... </p>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: (token, user_id, tags) => dispatch(matchEventsRequest(token, user_id, tags)),
});

const mapStateToProps = state => ({
  userId: state.user.data.user_id,
  tags: state.user.data.user_tags,
  proposedEvents: state.event.proposedEvents,
  events: state.event.events,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSearch);
