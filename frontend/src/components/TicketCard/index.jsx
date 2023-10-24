import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './ticketcard.module.css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function numberOfDays(checkin, checkout) {
  return Math.floor((Date.parse(checkout) - Date.parse(checkin)) / 86400000)
};

function parseDate(date) {
  const ymd = date.substring(0, date.indexOf('T')).split('-');
  return `${ymd[2]} ${months[ymd[1] - 1]}`;
};

export default function TicketCard(props) {
  const { title, description, price, image, checkinDate, checkoutDate, location } = props;

  const days = numberOfDays(checkinDate, checkoutDate);

  return (
    <Card className={styles.card}>
      <Card.Img className={styles.img} variant='top' src={image} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          {title}
        </Card.Title>
        <Card.Text>
          <div className={styles.desc}>{description}</div>
          <div>{parseDate(checkinDate)} - {parseDate(checkoutDate)}</div>
          <div className={styles.total}>
            <div>${price} x {days} nights</div>
            <div className={styles.usd}>TOTAL(USD) ${price * days} </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
};
