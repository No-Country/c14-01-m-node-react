/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFilters from "../../utils/useFilters";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Calendar } from "primereact/calendar";
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Messages from "../Messages/ModalMessages";
import { sendTickets } from "../../redux/actions/ticketsActions";
import { Form } from "react-bootstrap";
import { FiltersContext } from "../../context/FilterContext";

const PropertyDetail = () => {
  const { filters } = useFilters();
  const { product, loadProduct, userLog } = useContext(FiltersContext);
  const params = useParams();
  const { id } = params;
  // const location = getFilterByLocation(id);
  const [dates, setDates] = useState([
    filters.checkInDate ? new Date(filters.checkInDate) : new Date(),
    filters.checkOutDate ? new Date(filters.checkOutDate) : new Date(),
  ]);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // traer datos del usuario:
  useEffect(() => {
    loadProduct(id);
  }, []);
  // valores a enviar de la reserva
  const [values, setValue] = useState({
    first_name: userLog ? userLog.first_name : "",
    last_name: userLog ? userLog.last_name : "",
    email: userLog ? userLog.email : "",
    id_location: "",
    title: "",
    price: "",
    location: "",
    image: "",
    initialDate: filters.checkInDate ? filters.checkInDate : new Date(),
    endDate: filters.checkOutDate ? filters.checkOutDate : new Date(),
    guests: filters.guests,
  });

  // validacion del campo guest
  const [validated, setValidated] = useState(false);

  // redux
  const dispatch = useDispatch();

  const sendReservation = useCallback(() => {
    dispatch(sendTickets(values));
  });

  const handleChangeCalendar = (e) => {
    setDates(e.value);
    if (!e.value) setError("CheckIn and CheckOut dates must have a value");
    else {
      setError("");
      setValue((prev) => ({
        ...prev,
        initialDate: e.value[0],
        endDate: e.value[1],
      }));
    }
  };
  const handleChangeGuests = (e) => {
    const newGuests = e.target.value;
    setValue((prevValues) => ({
      ...prevValues,
      guests: newGuests,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (validated) {
      if (!userLog) {
        setModalShow(true);
      } else {
        setValue((prev) => ({
          ...prev,
          id_location: id,
          title: product.title,
          price: product.price,
          location: product.location,
          image: product.images[0],
        }));
        console.log("Valores a enviar", values);
        if (userLog) {
          setShow(true);
          sendReservation();
        }
      }
    }
  };
  return (
    <div className="container-detail-main">
      <div className="container-detail">
        <h1 className="location-title">{product?.title}</h1>
        <h1 className="location-subtitle">{product?.description}</h1>

        <div className="container-images">
          {product?.images.map((image, i) => (
            <div className={`photo-${i}`} key={i}>
              <img className="photo-img" src={image} />
            </div>
          ))}
        </div>
        <div className="container-image">
          <img className="photo-img" src={product?.images[0]} />
        </div>
        <div className="container-bottom">
          <div className="bottom-left">
            <h1>{product?.description}</h1>
            <p>
              It has a large kitchen-dining room and a breakfast room where you
              can enjoy your meals in a nice and bright space. Premium furniture
              and construction ensure a comfortable and pleasant stay. With two
              comfortable rooms and a spotless and spacious bathroom in the
              middle of the two. This house is perfect for couples, friends or
              families. Located in the center of Jujuy, you will have easy
              access to the area's main tourist{" "}
            </p>
            <h2>What this place offer</h2>
            <ul>
              {product?.amenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bottom-right">
            <Card>
              <Card.Body>
                <Card.Title>{`$ ${product?.price} USD per night`}</Card.Title>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="detail-body"
                >
                  <div>
                    <label>CheckIn - CheckOut</label>
                    <div className="input-detail">
                      <Form.Group>
                        <Calendar
                          value={dates}
                          onChange={(e) => handleChangeCalendar(e)}
                          numberOfMonths={2}
                          selectionMode="range"
                          className="input-detail"
                        />
                        <span className="error-message">{error}</span>
                      </Form.Group>
                    </div>
                    <label>Guests</label>
                    <div className="input-detail">
                      <Form.Control
                        type="text"
                        placeholder="Add Guests"
                        aria-describedby="inputGroupPrepend"
                        value={values.guests ? values.guests : ""}
                        onChange={handleChangeGuests}
                        className="input-detail"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please insert at least one guest
                      </Form.Control.Feedback>
                    </div>
                    <label>
                      Total:{" "}
                      {`$ 
                       ${
                         values.initialDate
                           ? ((new Date(values.endDate) -
                               new Date(values.initialDate)) /
                               (1000 * 60 * 60 * 24) +
                               1) *
                             parseInt(product?.price)
                           : 0
                       } USD`}
                    </label>
                  </div>
                  <Button type="submit" variant="primary">
                    Reserve
                  </Button>
                  <div className="detail-price">You won't be charged yet</div>
                </Form>
              </Card.Body>
            </Card>
            <Messages
              show={modalShow}
              title={"Atention!"}
              message={"You must to be logged to continue"}
              onHide={() => setModalShow(false)}
            />
            <Messages
              show={show}
              title={"Reservation:"}
              message={"Your reservation was sent!"}
              onHide={() => setShow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
