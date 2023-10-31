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
  const { title, price, image, checkinDate, checkoutDate, location } = props;

  const days = numberOfDays(checkinDate, checkoutDate);

  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <div className={styles.head}>
          <Card.Img className={styles.img} variant='top' src={image} />
          <Card.Title as='div' className={styles.title}>
            {title}
            <div className={styles.desc}>{location}</div>
          </Card.Title>
        </div>
        <Card.Text as='div' className={styles.txt}>
          <div>{parseDate(checkinDate)} - {parseDate(checkoutDate)}</div>
          <div className={styles.total}>
            <div>${price} x {days} nights</div>
            <div>TOTAL(USD) ${price * days} </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
};
