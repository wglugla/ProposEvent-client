import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 80vw;
  margin: 0 auto;
  bottom: 2rem;
`;

export const ErrorInfo = props => {
  const { message } = props;
  const hideNotification = () => {
    const notification = document.querySelector('.notification');
    const container = notification.parentNode;
    container.removeChild(notification);
  };
  return (
    <StyledNotification className="notification is-danger">
      <button onClick={hideNotification} className="delete" />
      <p> {message} </p>
    </StyledNotification>
  );
};
