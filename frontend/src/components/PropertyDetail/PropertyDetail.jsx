import { useParams } from "react-router-dom";
import useFilters from "../../utils/useFilters";
import "./style.css";

const PropertyDetail = () => {
  const { getFilterByLocation } = useFilters();
  const params = useParams();
  const { id } = params;
  console.log(id);
  const location = getFilterByLocation(id);
  console.log(location);
  return (
    <div className="container-main">
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
          <div>
            <p>{location.description}</p>
            <h2>Amenities</h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
