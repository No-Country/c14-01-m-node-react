/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";

function CarrouselImage({ images }) {
  return (
    <Carousel slide={false}>
      {images &&
        images.map((image, i) => (
          <Carousel.Item key={i} className="card-top">
            <img src={image} alt="image" className="image-card" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarrouselImage;
