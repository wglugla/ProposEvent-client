import React from 'react';

export const EventForm = props => {
  const { signed } = props;
  if (signed)
    return (
      <form>
        <button type="submit"> Opuść wydarzenie</button>
      </form>
    );
  else
    return (
      <form>
        <button type="submit"> Dołącz do wydarzenia </button>
      </form>
    );
};

export default EventForm;
