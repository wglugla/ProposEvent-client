import React from 'react';

export const EventDescription = props => {
  const { place, date, description, id } = props.event;
  return (
    <React.Fragment>
      <p> test: {id}</p>
      <p> Data wydarzenia: {date} </p>
      <p> Miejsce wydarzenia : {place} </p>
      <p> {description} </p>
    </React.Fragment>
  );
};

export default EventDescription;
