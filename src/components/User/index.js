import React from 'react';

const User = props =>
  props.userinfo.username ? <h1> Witaj {props.userinfo.username} </h1> : <p> Ładowanie ... </p>;

export default User;
