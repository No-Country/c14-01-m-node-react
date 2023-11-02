import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Calendar } from "primereact/calendar";
import "./styles.css";
import useFilters from "../../utils/useFilters";

// eslint-disable-next-line react/prop-types
function SearchBar({ show, setShow }) {
  // eslint-disable-next-line no-unused-vars
  const { filters, setFilters } = useFilters();
  const [fullscreen] = useState(true);
  const [dates, setDates] = useState(new Date());

  const handleChangeCalendar = (e) => {
    setDates(e.value);
    if (e.value) {
      const checkInDate = new Date(e.value[0]);
      const checkOutDate = new Date(e.value[1]);
      setFilters((prev) => ({
        ...prev,
        checkInDate: checkInDate.toISOString(),
        checkOutDate: checkOutDate.toISOString(),
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        checkInDate: null,
        checkOutDate: null,
      }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
        className="modal-searchbar"
      >
        <Modal.Body className="modal-custom-body">
          <form className="search-custom-air" onClick={() => setShow(true)}>
            <div className="input-air">
              <label htmlFor="">Where</label>
              <input
                placeholder="Search destinations"
                className="input-where"
                name="location"
                value={filters.location}
                onChange={handleChange}
              />
            </div>
            <div className="input-air">
              <label htmlFor="">CheckIn-CheckOut</label>
              <Calendar
                value={dates}
                onChange={(e) => handleChangeCalendar(e)}
                numberOfMonths={2}
                selectionMode="range"
                className="input-where"
              />
            </div>
            <div className="input-air">
              <label htmlFor="">Guests</label>
              <input
                type="text"
                placeholder="Add guests"
                className="input-guests"
                name="guests"
                value={filters.guests}
                onChange={handleChange}
              />
            </div>

            <img src="/icons/button-search.png" alt="search-button" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchBar;
