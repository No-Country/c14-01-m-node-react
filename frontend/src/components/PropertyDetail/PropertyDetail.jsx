/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFilters from "../../utils/useFilters";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Calendar } from "primereact/calendar";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { decodeToken } from "react-jwt";
import Messages from "../Messages/ModalMessages";
import { sendTickets } from "../../redux/actions/ticketsActions";

const PropertyDetail = () => {
  const { filters, getFilterByLocation } = useFilters();
  const params = useParams();
  const { id } = params;
  const location = getFilterByLocation(id);
  const [dates, setDates] = useState([
    filters.checkInDate ? new Date(filters.checkInDate) : new Date(),
    filters.checkOutDate ? new Date(filters.checkOutDate) : new Date(),
  ]);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  // traer datos del usuario:
  const [token, setToken] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    try {
      setToken(JSON.parse(authToken));
    } catch (error) {
      console.error("Error al analizar el token:", error);
    }
  },[]);

  // valores a enviar de la reserva
  const [values, setValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id_location: id,
    title: location.title,
    price: location.price,
    location: location.location,
    initialDate: filters.checkInDate,
    endDate: filters.checkOutDate,
    guests: filters.guests,
  });
  // redux
  const dispatch = useDispatch();

  const sendReservation = useCallback(() => {
    dispatch(sendTickets(values));
  });

  const handleChangeCalendar = (e) => {
    setDates(e.value);
    setValue((prev) => ({
      ...prev,
      initialDate: e.value[0],
      endDate: e.value[1],
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setModalShow(true);
    } else {
      try {
        const myDecodedToken = token ? await decodeToken(token) : null;

        if (myDecodedToken) {
          const nameParts = myDecodedToken.name.split(" ");
          const firstName = nameParts[0];
          const lastName =
            nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

          setValue((prev) => ({
            ...prev,
            first_name: firstName,
            last_name: lastName,
            email: myDecodedToken.email,
          }));

          console.log("Valores a enviar", values);
          if (isAuthenticated) {
            setShow(true);
            sendReservation();
          }
        } else {
          console.error("No se pudo decodificar el token.");
        }
      } catch (error) {
        console.error("Error al procesar el token:", error);
      }
    }
  };

  return (
    <div className="container-detail-main">
      <div className="container-detail">
        <h1 className="location-title">{location.title}</h1>
        <h1 className="location-subtitle">{location.description}</h1>

        <div className="container-images">
          {location.images.map((image, i) => (
            <div className={`photo-${i}`} key={i}>
              <img className="photo-img" src={image} />
            </div>
          ))}
        </div>
        <div className="container-bottom">
          <div className="bottom-left">
            <h1>{location.description}</h1>
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
              {location.amenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bottom-right">
            <Card>
              <Card.Body>
                <Card.Title>{`$ ${location.price} USD per night`}</Card.Title>
                <form className="detail-body" onSubmit={handleSubmit}>
                  <div>
                    <label>CheckIn - CheckOut</label>
                    <div className="input-detail">
                      <Calendar
                        value={dates}
                        onChange={(e) => handleChangeCalendar(e)}
                        numberOfMonths={2}
                        selectionMode="range"
                        className="input-detail"
                      />
                    </div>
                    <label>Guests</label>
                    <div className="input-detail">
                      <input
                        type="text"
                        placeholder="Add Guests"
                        name="guests"
                        value={values.guests}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <label>
                      Total:{" "}
                      {`$ 
                       ${
                         values.initialDate
                           ? ((new Date(values.endDate) -
                               new Date(values.initialDate)) /
                               (1000 * 60 * 60 * 24)) *
                             parseInt(location.price)
                           : 0
                       } USD`}
                    </label>
                  </div>
                  <Button type="submit" variant="primary">
                    Reserve
                  </Button>
                  <div className="detail-price">You won't be charged yet</div>
                </form>
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
