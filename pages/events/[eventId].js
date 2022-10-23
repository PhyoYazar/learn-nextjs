import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "../../components/helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = (props) => {
  const { event } = props;

  if (!event) {
    return (
      // <ErrorAlert>
      <div className="center">
        <p>Loading...</p>
      </div>
      // <p>No event found!</p>
      // </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  // const allEvents = await getAllEvents();
  const events = await getFeaturedEvents();

  const eventIdPaths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: eventIdPaths,
    // fallback: false,
    fallback: true,
    // fallback: "blocking",
  };
}
