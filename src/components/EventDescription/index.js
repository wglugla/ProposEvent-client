import React from 'react';
import Moment from 'react-moment';
import { StyledMoment } from '../../shared/Moment';

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
      <StyledParagraph>
        <Moment locale="pl" format="dddd DD MMMM YYYY, h:mm">
          {date}
        </Moment>
        <StyledMoment locale="pl" fromNow>
          {date}
        </StyledMoment>
      </StyledParagraph>
      <StyledParagraph className="has-text-weight-bold"> Miejsce wydarzenia </StyledParagraph>
      <StyledParagraph> {place} </StyledParagraph>
      <StyledParagraph className="has-text-weight-bold"> Opis wydarzenia </StyledParagraph>
      <StyledParagraph> {description} </StyledParagraph>
    </React.Fragment>
  );
};

export default EventDescription;
