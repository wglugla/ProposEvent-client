import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventDescription from '../../components/EventDescription';
import { fetchEventRequest } from '../../state/ducks/event/actions';

export class Event extends Component {
  componentDidMount() {
    const currentId = this.props.match.params.id;
    this.props.fetchEvent(localStorage.proposEventToken, currentId);
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
const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (token, id) => dispatch(fetchEventRequest(token, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
