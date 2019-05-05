import React from 'react';

import { StyledForm } from '../../shared/Form';
import { StyledBoldParagraph } from '../../shared/Paragraph';

export const OwnerEventForm = props => {
  const { isActual } = props;
  const deleteSubmit = e => {
    e.preventDefault();
    props.onDelete(localStorage.proposEventToken, props.eventId);
  };
  const modifySubmit = e => {
    e.preventDefault();
    props.onModify(props.eventId);
  };
  if (isActual) {
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
  } else {
    return (
      <div>
        <StyledBoldParagraph> Wydarzenie odbyło się. </StyledBoldParagraph>
        <StyledForm onSubmit={deleteSubmit}>
          <button className="button is-danger" type="submit">
            Usuń wydarzenie
          </button>
        </StyledForm>
      </div>
    );
  }
};

export default OwnerEventForm;
