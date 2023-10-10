/* eslint-disable react/prop-types */
import "./styles.css";
const IconsCategories = ({ icon }) => {
  return (
    <div className="icon-container">
      <img className="icon-image" src={icon.image} alt={icon.name} />
      <div className="icon-name">{icon.name}</div>
    </div>
  );
};

export default IconsCategories;
