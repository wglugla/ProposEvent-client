import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const EventInfo = props => {
  const { title, place, date, description, event_tags, accuracyPercentage } = props.event;
  return (
    <li>
      <Link to={`/events/${props.event.event_id}`}>
        <div className="card is-size-7">
          <div className="card-header">
            <p className="card-header-title"> {title} </p>
          </div>
          <div className="card-content">
            <div className="content">
              <p> Data: {date} </p>
              <p> Miejsce: {place} </p>
              <p> {description} </p>
              {accuracyPercentage !== undefined ? <p> Zgodność: {accuracyPercentage}%</p> : null}
            </div>
          </div>
          <footer className="card-footer">
            <StyledTagsList>
              {JSON.parse(event_tags).map(tag => (
                <li className="card-footer-item" key={tag}>
                  {tag}
                </li>
              ))}
            </StyledTagsList>
          </footer>
        </div>
      </Link>
    </li>
  );
};

export default EventInfo;
