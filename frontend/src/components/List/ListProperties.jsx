import locations from "../../data/locations.json";
import CardProperty from "./CardProperty";
import "./styles.css";
import useFilters from "../../utils/useFilters";

const ListProperties = () => {
  const { getFilteredProducts } = useFilters();
  const locationsFiltered = getFilteredProducts(locations);
  return (
    <div className="container-cards">
      {locationsFiltered ? (
        locationsFiltered.map((item) => (
          <CardProperty key={item.id} location={item} />
        ))
      ) : (
        <div>{"Is not locations avaliables in this category"}</div>
      )}
    </div>
  );
};

export default ListProperties;
