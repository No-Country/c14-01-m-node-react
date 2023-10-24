import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './ticketcard.module.css';

export default function TicketCard(props) {
  const { title, description, price, image, checkinDate, checkoutDate, location } = props;
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.img} variant='top' src={image} />
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
};
