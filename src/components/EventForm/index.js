import React from 'react';

export const EventForm = props => {
  const { signed } = props;
  const addMember = e => {
    e.preventDefault();
    props.addMember(localStorage.proposEventToken, props.userId, props.eventId);
  };
  const removeMember = e => {
    e.preventDefault();
    props.removeMember(localStorage.proposEventToken, props.userId, props.eventId);
  };
  if (signed)
    return (
      <form onSubmit={removeMember}>
        <button type="submit"> Opuść wydarzenie</button>
      </form>
    );
  else
    return (
      <form onSubmit={addMember}>
        <button type="submit"> Dołącz do wydarzenia </button>
      </form>
    );
};

export default EventForm;
