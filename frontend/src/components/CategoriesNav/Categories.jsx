import icons from "../../assets/icons";
import useFilters from "../../utils/useFilters";
import IconsCategories from "./IconsCategories";

const Categories = () => {
  const { filters, setFilters } = useFilters();

  const handleClick = (category) => {
    console.log(category);
    setFilters((prev) => ({
      ...prev,
      categories: category,
    }));
  };

  console.log(filters);
  return (
    <div className="container-categories-general">
      <div className="container-categories">
        {icons.map((item) => (
          <div key={item.name} onClick={() => handleClick(item.name)}>
            <IconsCategories icon={item} />
          </div>
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
