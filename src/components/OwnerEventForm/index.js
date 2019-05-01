import React from 'react';

import { StyledForm } from '../../shared/Form';

export const OwnerEventForm = props => {
  const deleteSubmit = e => {
    e.preventDefault();
    props.onDelete(localStorage.proposEventToken, props.eventId);
  };
  const modifySubmit = e => {
    e.preventDefault();
    props.onModify(props.eventId);
  };
  return (
    <div>
      <StyledForm onSubmit={modifySubmit}>
        <button className="button is-info" type="submit">
          Edytuj wydarzenie
        </button>
      </StyledForm>
      <StyledForm onSubmit={deleteSubmit}>
        <button className="button is-danger" type="submit">
          Usuń wydarzenie
        </button>
      </StyledForm>
    </div>
  );
};

export default OwnerEventForm;
