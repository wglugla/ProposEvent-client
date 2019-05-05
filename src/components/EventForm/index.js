import React from 'react';
import { StyledBoldParagraph } from '../../shared/Paragraph';

export const EventForm = props => {
  const { signed, isActual } = props;
  const addMember = e => {
    e.preventDefault();
    props.addMember(localStorage.proposEventToken, props.userId, props.eventId);
  };
  const removeMember = e => {
    e.preventDefault();
    props.removeMember(localStorage.proposEventToken, props.userId, props.eventId);
  };
  if (isActual) {
    if (signed) {
      return (
        <form onSubmit={removeMember}>
          <button className="button is-danger" type="submit">
            Opuść wydarzenie
          </button>
        </form>
      );
    } else {
      return (
        <form onSubmit={addMember}>
          <button className="button is-info" type="submit">
            Dołącz do wydarzenia
          </button>
        </form>
      );
    }
  } else {
    return <StyledBoldParagraph> Wydarzenie odbyło się. </StyledBoldParagraph>;
  }
};

export default EventForm;
