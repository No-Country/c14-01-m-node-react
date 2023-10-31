import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../redux/actions/ticketsActions";
import TicketCard from "../TicketCard";
import Modal from "react-bootstrap/Modal";
import styles from "./tickets.module.css";
import { useJwt } from "react-jwt";

export default function Tickets() {
  const [show, setShow] = useState(false);

  const { token } = useSelector(state => state?.auth?.user);

  const { decodedToken } = useJwt(token);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const fetchGetTickets = useCallback(() => {
    dispatch(getTickets(decodedToken?.email));
  });

  useEffect(() => {
    if (decodedToken?.email) fetchGetTickets();
  }, [decodedToken?.email]);

  const { tickets } = useSelector((state) => state);

  return (
    <div>
      <button className={styles.button} onClick={handleShow}>
        Reservations
      </button>

      <Modal className={styles.modal} show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your reservations!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          {tickets.reservations ? tickets?.reservations?.map((ticket) => (
            <TicketCard
              key={ticket._id}
              title={ticket.title}
              description={ticket.description}
              price={ticket.price}
              image={ticket.images}
              checkinDate={ticket.initialDate}
              checkoutDate={ticket.endDate}
              location={ticket.location}
            />
          )) : <p>You don't have any reservation yet.</p>}
        </Modal.Body>
      </Modal>
    </div>
  );
}
