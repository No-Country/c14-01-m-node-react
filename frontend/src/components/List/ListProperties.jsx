import locations from "../../data/locations.json";
import CardProperty from "./CardProperty";
import "./styles.css";
const ListProperties = () => {
  return (
    <div className="container-cards">
      {locations.map((item) => (
        <CardProperty key={item.id} location={item} />
      ))}
    </div>
  );
};

export default ListProperties;
