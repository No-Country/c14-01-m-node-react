/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFilters from "../../utils/useFilters";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { decodeToken } from "react-jwt";
import Messages from "../Messages/ModalMessages";

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

  // traer datos del usuario:
  const [token, setToken] = useState(null);

  const { isAuthenticated } = useSelector((state) => state?.auth);
  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    try {
      setToken(JSON.parse(authToken));
    } catch (error) {
      console.error("Error al analizar el token:", error);
    }
  }, [isAuthenticated]);

  const myDecodedToken = token ? decodeToken(token) : null;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setModalShow(true);
    } else {
      if (myDecodedToken) {
        setValue((prev) => ({
          ...prev,
          first_name: myDecodedToken.name.split(" ")[0],
          last_name: myDecodedToken.name.split(" ")[1],
          email: myDecodedToken.email,
        }));
      }
      console.log("valores a enviar", values);
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
                <Card.Title>{`$ ${location.price} USD`}</Card.Title>
                <form className="detail-body" onSubmit={handleSubmit}>
                  <div>
                    <div className="input-detail">
                      <Calendar
                        value={dates}
                        onChange={(e) => handleChangeCalendar(e)}
                        numberOfMonths={2}
                        selectionMode="range"
                        className="input-detail"
                      />
                    </div>
                    <div className="input-detail">
                      <input
                        type="text"
                        placeholder="Add Guests"
                        name="guests"
                        value={values.guests}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
