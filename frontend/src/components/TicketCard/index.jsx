import React, { useCallback, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ticketcard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTickets } from '../../redux/actions/ticketsActions';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function numberOfDays(checkin, checkout) {
  return Math.floor((Date.parse(checkout) - Date.parse(checkin)) / 86400000)
};

function parseDate(date) {
  const ymd = date.substring(0, date.indexOf('T')).split('-');
  return `${ymd[2]} ${months[ymd[1] - 1]}`;
};

export default function TicketCard(props) {

  const { title, price, image, checkinDate, checkoutDate, location, id, fetchGetTickets, guests } = props;

  const days = numberOfDays(checkinDate, checkoutDate);

  const { deleteMessage } = useSelector(state => state?.tickets)

  const dispatch = useDispatch();

  const fetchDeleteTicket = useCallback(() => {
    dispatch(deleteTickets(id));
  });

  const handleClickDelete = () => {
    fetchDeleteTicket();
  };

  useEffect(() => {
    if (deleteMessage === "reservation was successfully deleted") fetchGetTickets();
  }, [deleteMessage]);

  return (
    <Card className={styles.card}>
      <Card.Body className={styles.body}>
        <Button variant='danger' className={styles.x} onClick={handleClickDelete}>X</Button>
        <div className={styles.head}>
          <Card.Img className={styles.img} variant='top' src={image} />
          <Card.Title as='div' className={styles.title}>
            <div>{title}</div>
            <div className={styles.desc}>{location}</div>
          </Card.Title>
        </div>
        <Card.Text as='div' className={styles.txt}>
          <div className={styles.total}>
            <div>{parseDate(checkinDate)} - {parseDate(checkoutDate)}</div>
            <div>{guests} guests</div>
          </div>
          <div className={styles.total}>
            <div>${price} x {days} nights</div>
            <div>TOTAL(USD) ${price * days} </div>
          </div>
        </Card.Text>
      </Card.Body>
      <Button variant='danger' className={styles.delete} onClick={handleClickDelete}>DELETE</Button>
    </Card>
  )
};
