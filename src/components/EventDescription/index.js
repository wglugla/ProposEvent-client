import React from 'react';

import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 1rem 0;
`;

export const EventDescription = props => {
  const { title, place, date, description } = props.event;
  return (
    <React.Fragment>
      <h2 className="title is-3"> {title}</h2>
      <StyledParagraph className="has-text-weight-bold"> Data </StyledParagraph>
      <StyledParagraph> {date} </StyledParagraph>
      <StyledParagraph className="has-text-weight-bold"> Miejsce wydarzenia </StyledParagraph>
      <StyledParagraph> {place} </StyledParagraph>
      <StyledParagraph className="has-text-weight-bold"> Opis wydarzenia </StyledParagraph>
      <StyledParagraph> {description} </StyledParagraph>
    </React.Fragment>
  );
};

export default EventDescription;
