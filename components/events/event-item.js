import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';

const EventItem = (props) => {
  const { title, date, image, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploredLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt='' />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploredLink}>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
            <span>Explore Event</span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
