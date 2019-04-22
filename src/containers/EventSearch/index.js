import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEventsRequest } from '../../state/ducks/event/actions';
import EventInfo from '../../components/EventInfo';

class EventSearch extends Component {
  componentDidMount() {
    const token = localStorage.proposEventToken;
    this.props.fetchEvents(token);
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
        {this.props.events ? (
          this.props.events.map(event => <EventInfo key={event.event_id} event={event} />)
        ) : (
          <p> Wyszukiwanie... </p>
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: token => dispatch(fetchEventsRequest(token)),
});

const mapStateToProps = state => ({
  tags: state.user.data.user_tags,
  events: state.event.events,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSearch);
