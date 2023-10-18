/* eslint-disable react/prop-types */
import CarrouselImage from "./CarrouselImage";
const CardProperty = ({ location }) => {
  return (
    <div className="card-property">
      <div className="card-top">
        <div className="position-heart">
          <img className="heart" src="/icons/heart.png" alt="heart" />
        </div>
        <CarrouselImage images={location.images} />
      </div>
      <div className="card-bottom">
        <div className="bottom-title">
          {location.title.substring(0, 35) + "..."}
        </div>
        <div className="bottom-description">
          {location.description.substring(0, 35) + "..."}
        </div>
        <div className="bottom-price">
          {`$ ${location.price} USD  `}
          <span className="bottom-span">night</span>
        </div>
      </div>
    </div>
  );
};

export default CardProperty;
