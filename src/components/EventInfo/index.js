import React from 'react';
import Moment from 'react-moment';
import { StyledMoment } from '../../shared/Moment';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const EventInfo = props => {
  const { title, place, date, event_tags, accuracyPercentage } = props.event;
  return (
    <li>
      <Link to={`/events/${props.event.event_id}`}>
        <div className="card is-size-7">
          <div className="card-header">
            <p className="card-header-title"> {title} </p>
          </div>
          <div className="card-content">
            <div className="content">
              <p>
                <Moment locale="pl" format="dddd Do MMMM YYYY, h:mm">
                  {date}
                </Moment>
                <StyledMoment locale="pl" fromNow>
                  {date}
                </StyledMoment>
              </p>

              <p>{place} </p>
              {accuracyPercentage !== undefined ? (
                <p> Zgodność: {Math.round(accuracyPercentage)}%</p>
              ) : null}
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
