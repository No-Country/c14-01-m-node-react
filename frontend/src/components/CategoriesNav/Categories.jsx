import { Link } from "react-router-dom";
import icons from "../../assets/icons";
import IconsCategories from "./IconsCategories";

const Categories = () => {
  return (
    <div className="container-categories-general">
      <div className="container-categories">
        {icons.map((item) => (
          <Link key={item.name} to={`/filters/${item.name}`}>
            <IconsCategories icon={item} />
          </Link>
        ))}
      </div>
      <div className="filters">
        <img src="icons/options.png" alt="filter" />
        <div>Filters</div>
      </div>
    </div>
  );
};

export default Categories;
