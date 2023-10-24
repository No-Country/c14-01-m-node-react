import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketsActions';
import TicketCard from '../../components/TicketCard';

export default function Tickets() {
  const dispatch = useDispatch();

  const fetchGetTickets = useCallback(() => {
    dispatch(getTickets());
  });

  useEffect(() => {
    fetchGetTickets();
  });

  const { tickets } = useSelector((state) => state);

  return <>
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
  </>
};
