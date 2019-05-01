import React, { Component } from 'react';
import { connect } from 'react-redux';

import { matchEventsRequest } from '../../state/ducks/event/actions';
import EventInfo from '../../components/EventInfo';

import { StyledSection } from '../../shared/Container';
import styled from 'styled-components';

const StyledInlineTitle = styled.h2`
  display: inline;
`;

const StyledTitle = styled.h2`
  margin: 2rem 0;
`;

class EventSearch extends Component {
  componentDidMount() {
    const token = localStorage.proposEventToken;
    const { userId, tags } = this.props;
    this.props.fetchEvents(token, userId, tags);
  }
  render() {
    return (
      <StyledSection className="section">
        <h1 className="title is-3"> Wyszukiwarka eventów </h1>
        <StyledInlineTitle className="title is-6"> Twoje tagi: </StyledInlineTitle>
        {this.props.tags ? (
          JSON.parse(this.props.tags).map(el => (
            <li className="tag is-size-7" key={el}>
              {el}
            </li>
          ))
        ) : (
          <p> Ładowanie tagów </p>
        )}
        <StyledTitle className="title is-4"> Znalezione wydarzenia: </StyledTitle>
        <ul>
          {this.props.proposedEvents ? (
            this.props.proposedEvents.length ? (
              this.props.proposedEvents.map(event => (
                <EventInfo key={event.event_id} event={event} />
              ))
            ) : (
              <p> Brak nowych wydarzeń</p>
            )
          ) : (
            <p> Wyszukiwanie... </p>
          )}
        </ul>
      </StyledSection>
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
