import React from 'react';

export const EventDescription = props => {
  const { title, place, date, description } = props.event;
  return (
    <React.Fragment>
      <p> Title: {title}</p>
      <p> Data wydarzenia: {date} </p>
      <p> Miejsce wydarzenia : {place} </p>
      <p> {description} </p>
    </React.Fragment>
  );
};

export default EventDescription;
