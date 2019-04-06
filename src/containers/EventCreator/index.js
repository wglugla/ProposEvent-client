import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventCreatorForm from '../../components/EventCreatorForm';
import { createEventRequest } from '../../state/ducks/event/actions';

class EventCreator extends Component {
  render() {
    return (
      <EventCreatorForm
        createEvent={this.props.createEvent}
        created={this.props.created}
        failed={this.props.failed}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEvent: eventData => {
      eventData.tags = eventData.tags.substring(0, eventData.tags.length - 1);
      dispatch(createEventRequest(eventData, localStorage.proposEventToken));
    },
  };
};

const mapStateToProps = state => ({
  created: state.event.eventCreateStatus.done,
  failed: state.event.eventCreateStatus.fail,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCreator);
