import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventDescription from '../../components/EventDescription';
import { fetchEventRequest } from '../../state/ducks/event/actions';

export class Event extends Component {
  componentDidMount() {
    this.props.fetchEvent(localStorage.proposEventToken);
  }
  render() {
    if (this.props.currentEvent) {
      return <EventDescription event={this.props.currentEvent} id={this.props.match.params.id} />;
    } else {
      return <p> Ładowanie ... </p>;
    }
  }
}

const mapStateToProps = state => ({
  currentEvent: state.event.currentEvent,
});
const mapDispatchToProps = dispatch => ({
  fetchEvent: token => dispatch(fetchEventRequest(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
