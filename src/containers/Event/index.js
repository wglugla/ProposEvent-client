import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  fetchEventRequest,
  deleteEventRequest,
  addEventMemberRequest,
  removeEventMemberRequest,
} from '../../state/ducks/event/actions';

import EventDescription from '../../components/EventDescription';
import OwnerEventForm from '../../components/OwnerEventForm';
import EventForm from '../../components/EventForm';

import { StyledSection } from '../../shared/Container';

export class Event extends Component {
  componentDidMount() {
    const currentId = this.props.match.params.id;
    this.props.fetchEvent(localStorage.proposEventToken, currentId);
  }
  checkSigned() {
    const { signedEvents, currentEvent } = this.props;
    let targetedEvent;
    if (signedEvents != null) {
      targetedEvent = signedEvents.find(event => event.event_id === currentEvent.event_id);
    } else targetedEvent = null;
    return targetedEvent ? true : false;
  }
  checkIfActual(date) {
    const a = moment(new Date(date));
    const b = moment(new Date());
    const past = a.diff(b, 'minutes');
    const isActual = past > 1 ? true : false;
    return isActual;
  }
  render() {
    const { currentUserId, ownerId, currentEvent } = this.props;
    if (currentEvent && Object.keys(currentEvent).length !== 0) {
      const isActual = this.checkIfActual(this.props.currentEvent.date);
      return (
        <StyledSection className="section columns">
          <div className="column">
            <EventDescription event={this.props.currentEvent} id={this.props.match.params.id} />
            {currentUserId === ownerId ? (
              <OwnerEventForm
                onDelete={this.props.deleteEvent}
                onModify={this.props.modifyEvent}
                eventId={this.props.match.params.id}
                isActual={isActual}
              />
            ) : (
              <EventForm
                signed={this.checkSigned()}
                addMember={this.props.addMember}
                removeMember={this.props.removeMember}
                userId={this.props.currentUserId}
                eventId={this.props.currentEvent.event_id}
                isActual={isActual}
              />
            )}
          </div>
          <div className="column">
            <figure className="image">
              <img src="https://via.placeholder.com/300" alt="zdjecie eventu" />
            </figure>
          </div>
        </StyledSection>
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
    modifyEvent: eventId => dispatch(push(`/events/${eventId}/modify`)),
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
