/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalFilters.css";
import useFilters from "../../utils/useFilters";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ModalFilter(props) {
  const { filters, setFilters } = useFilters();
  const amenities = [
    "wifi",
    "washer",
    "air conditioning",
    "kitchen",
    "dryer",
    "heating",
  ];
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      amenities: checked
        ? [...prevFilters.amenities, name]
        : prevFilters.amenities.filter((item) => item !== name),
    }));
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Price range</h4>
        <p>Choose your price's location</p>
        <input
          type="range"
          name="price"
          id="price"
          min="0"
          max="1000"
          value={filters.maxPrice}
          className="input-range"
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,

              maxPrice: e.target.value,
            }));
          }}
        />
        <FloatingLabel
          controlId="floatingInput"
          label="Maximun"
          className="mb-2 floating"
        >
          <Form.Control
            type="text"
            value={filters.maxPrice}
            onChange={(e) => {
              setFilters((prev) => ({
                ...prev,

                maxPrice: e.target.value,
              }));
            }}
          />
        </FloatingLabel>
        <hr />
        <h4>Amenities</h4>
        <p>Choose under your necesities</p>
        <div className="amenities">
          {amenities.map((item) => (
            <div className="amenities-item" key={item}>
              <input
                type="checkbox"
                name={item}
                id={item}
                checked={filters.amenities.includes(item)}
                onChange={handleCheck}
              />
              <label htmlFor="">{item}</label>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFilter;
