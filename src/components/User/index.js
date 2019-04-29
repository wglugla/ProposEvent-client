import React from 'react';

const User = props => {
  return !props.userinfo.username ? (
    <p> Ładowanie ... </p>
  ) : (
    <React.Fragment>
      <h1 className="title"> Witaj {props.userinfo.username}! </h1>
      <p className="has-color-gray"> Liczba twoich wydarzeń: {props.userinfo.eventsCreated}</p>
      <p className="has-color-gray">
        Liczba wydarzeń w których weźmiesz udział: {props.userinfo.eventsSigned}
      </p>
    </React.Fragment>
  );
};

export default User;
