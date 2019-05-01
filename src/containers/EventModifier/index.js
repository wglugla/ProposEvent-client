import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventModifierForm from '../../components/EventModifierForm';
import { modifyEventRequest, fetchEventRequest } from '../../state/ducks/event/actions';

export class EventModifier extends Component {
  componentDidMount() {
    const { currentEventInfo } = this.props;
    const currentId = this.props.match.params.id;
    if (Object.keys(currentEventInfo).length === 0) {
      this.props.fetchEvent(localStorage.proposEventToken, currentId);
    }
  }
  render() {
    const { currentEventInfo, modifyEvent } = this.props;
    if (Object.keys(currentEventInfo).length === 0) {
      return <p> Wczytywanie danych.. </p>;
    }
    return <EventModifierForm modifyEvent={modifyEvent} eventInfo={currentEventInfo} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modifyEvent: (eventData, event_id) =>
      dispatch(modifyEventRequest(localStorage.proposEventToken, eventData, event_id)),
    fetchEvent: (token, id) => dispatch(fetchEventRequest(token, id)),
  };
};

const mapStateToProps = state => ({
  currentEventInfo: state.event.currentEvent,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModifier);
