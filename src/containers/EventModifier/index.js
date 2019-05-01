import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventModifierForm from '../../components/EventModifierForm';
import { modifyEventRequest } from '../../state/ducks/event/actions';

export class EventModifier extends Component {
  render() {
    const { currentEventInfo, modifyEvent } = this.props;
    return <EventModifierForm modifyEvent={modifyEvent} eventInfo={currentEventInfo} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    modifyEvent: (eventData, event_id) =>
      dispatch(modifyEventRequest(localStorage.proposEventToken, eventData, event_id)),
  };
};

const mapStateToProps = state => ({
  currentEventInfo: state.event.currentEvent,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModifier);
