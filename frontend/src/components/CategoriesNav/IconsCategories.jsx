/* eslint-disable react/prop-types */
import "./styles.css";
const IconsCategories = ({ icon }) => {
  const capitalizeLetter = (srt) => {
    return srt.charAt(0).toUpperCase() + srt.slice(1);
  };

  return (
    <div className="icon-container">
      <img className="icon-image" src={icon.image} alt={icon.name} />
      <div className="icon-name">{capitalizeLetter(icon.name)}</div>
    </div>
  );
};

export default IconsCategories;
