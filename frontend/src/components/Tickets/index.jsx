import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketsActions';
import TicketCard from '../TicketCard';
import Modal from 'react-bootstrap/Modal';
import styles from './tickets.module.css'

export default function Tickets() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const fetchGetTickets = useCallback(() => {
    dispatch(getTickets());
  });

  useEffect(() => {
    fetchGetTickets();
  },[]);

  const { tickets } = useSelector((state) => state);

  return <div>

    <button className={styles.button} onClick={handleShow}>Reservations</button>

    <Modal className={styles.modal} show={show} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your reservations!</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        {tickets?.map((ticket) =>
          <TicketCard
            key={ticket._id}
            title={ticket.title}
            description={ticket.description}
            price={ticket.price}
            image={ticket.images[0]}
            checkinDate={ticket.initialDate}
            checkoutDate={ticket.endDate}
            location={ticket.location}
          />
        )}
      </Modal.Body>
    </Modal>
  </div>
};
