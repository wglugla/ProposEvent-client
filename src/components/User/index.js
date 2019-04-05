import React from 'react';

const User = props => {
  return !props.userinfo.username ? (
    <p> Ładowanie ... </p>
  ) : (
    <React.Fragment>
      <h1> Witaj {props.userinfo.username} </h1>
      <p> Liczba twoich wydarzeń: {props.userinfo.eventsCreated}</p>
      <p> Liczba wydarzeń w których weźmiesz udział: {props.userinfo.eventsSigned}</p>
    </React.Fragment>
  );
};

export default User;
