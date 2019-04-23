import React from 'react';

export const OwnerEventForm = props => {
  const deleteSubmit = e => {
    e.preventDefault();
    props.onDelete(localStorage.proposEventToken, props.eventId);
  };
  return (
    <React.Fragment>
      <form>
        <button type="submit"> Edytuj wydarzenie </button>
      </form>
      <form onSubmit={deleteSubmit}>
        <button type="submit"> Usuń wydarzenie </button>
      </form>
    </React.Fragment>
  );
};

export default OwnerEventForm;
