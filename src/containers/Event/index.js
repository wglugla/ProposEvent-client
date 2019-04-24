import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchEventRequest,
  deleteEventRequest,
  addEventMemberRequest,
  removeEventMemberRequest,
} from '../../state/ducks/event/actions';

import EventDescription from '../../components/EventDescription';
import OwnerEventForm from '../../components/OwnerEventForm';
import EventForm from '../../components/EventForm';

export class Event extends Component {
  componentDidMount() {
    const currentId = this.props.match.params.id;
    this.props.fetchEvent(localStorage.proposEventToken, currentId);
  }
  checkSigned() {
    const { signedEvents, currentEvent } = this.props;
    signedEvents.filter(event => event.event_id === currentEvent.event_id);
    return signedEvents.length ? true : false;
  }
  render() {
    const { currentUserId, ownerId } = this.props;
    if (this.props.currentEvent) {
      return (
        <React.Fragment>
          <EventDescription event={this.props.currentEvent} id={this.props.match.params.id} />
          {currentUserId === ownerId ? (
            <OwnerEventForm
              onDelete={this.props.deleteEvent}
              eventId={this.props.match.params.id}
            />
          ) : (
            <EventForm
              signed={this.checkSigned()}
              addMember={this.props.addMember}
              removeMember={this.props.removeMember}
              userId={this.props.currentUserId}
              eventId={this.props.currentEvent.event_id}
            />
          )}
        </React.Fragment>
      );
    } else {
      return <p> Ładowanie ... </p>;
    }
  }
}

const mapStateToProps = state => ({
  currentEvent: state.event.currentEvent,
  currentUserId: state.user.data.user_id,
  ownerId: state.event.currentEvent.owner_id,
  deleting: state.event.deleting,
  signedEvents: state.user.userSignedEvents,
});
const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (token, id) => dispatch(fetchEventRequest(token, id)),
    deleteEvent: (token, id) => dispatch(deleteEventRequest(token, id)),
    addMember: (token, user_id, event_id) =>
      dispatch(addEventMemberRequest(token, user_id, event_id)),
    removeMember: (token, user_id, event_id) =>
      dispatch(removeEventMemberRequest(token, user_id, event_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
