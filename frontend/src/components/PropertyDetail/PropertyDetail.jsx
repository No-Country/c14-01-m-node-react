/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import useFilters from "../../utils/useFilters";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PropertyDetail = () => {
  const { getFilterByLocation } = useFilters();
  const params = useParams();
  const { id } = params;

  const location = getFilterByLocation(id);

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
                <div className="detail-body">
                  <div>
                    <div className="input-detail">
                      <input type="text" placeholder="Check-in" />
                      <input type="text" placeholder="Check-out" />
                    </div>
                    <div className="input-detail">
                      <input type="text" placeholder="Add Guests" />
                    </div>
                  </div>
                  <Button variant="primary">Reserve</Button>
                  <div className="detail-price">You won't be charged yet</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
