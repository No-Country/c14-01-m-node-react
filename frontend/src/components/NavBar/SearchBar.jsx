import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Calendar } from "primereact/calendar";
import "./styles.css";

// eslint-disable-next-line react/prop-types
function SearchBar({ show, setShow }) {
  // eslint-disable-next-line no-unused-vars
  const [fullscreen, setFullscreen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [values, setValues] = useState({
    where: "",
    guests: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
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
          <form
            className="search-custom-air"
            onClick={() => setShow(true)}
            onSubmit={handleSubmit}
          >
            <div className="input-air">
              <label htmlFor="">Where</label>
              <input
                placeholder="Search destinations"
                className="input-where"
                name="where"
                value={values.where}
                onChange={handleChange}
              />
            </div>
            <div className="input-air">
              <label htmlFor="">CheckIn-CheckOut</label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
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
                value={values.guests}
                onChange={handleChange}
              />
            </div>
            <button type="submit">
              <img src="icons/button-search.png" alt="search-button" />
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchBar;
