import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/event-search';

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />;
    </Fragment>
  );
};

export default AllEventsPage;
