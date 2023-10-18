import CardProperty from "./CardProperty";
import "./styles.css";
import useFilters from "../../utils/useFilters";
import { Link } from "react-router-dom";

const ListProperties = () => {
  const { getFilteredProducts } = useFilters();
  const locationsFiltered = getFilteredProducts();
  return (
    <div className="container-cards">
      {locationsFiltered ? (
        locationsFiltered.map((item) => (
          <Link key={item.id} to={`/filter/${item.id}`}>
            <CardProperty location={item} />
          </Link>
        ))
      ) : (
        <div>{"Is not locations avaliables in this category"}</div>
      )}
    </div>
  );
};

export default ListProperties;
