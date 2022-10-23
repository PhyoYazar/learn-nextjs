import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../components/helpers/api-util";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta
          name="description"
          content="Find a lot of great events in here ..."
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
