import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchEventRequest, deleteEventRequest } from '../../state/ducks/event/actions';

import EventDescription from '../../components/EventDescription';
import OwnerEventForm from '../../components/OwnerEventForm';
import EventForm from '../../components/EventForm';

export class Event extends Component {
  componentDidMount() {
    const currentId = this.props.match.params.id;
    this.props.fetchEvent(localStorage.proposEventToken, currentId);
  }
  render() {
    const { currentUserId, ownerId } = this.props;
    if (this.props.deleting.status) {
      return <Redirect to="/" />;
    }
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
            <EventForm />
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
});
const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: (token, id) => dispatch(fetchEventRequest(token, id)),
    deleteEvent: (token, id) => dispatch(deleteEventRequest(token, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
