import icons from "../../assets/icons";
import IconsCategories from "./IconsCategories";
const Categories = () => {
  console.log(icons);
  return (
    <div className="container-categories-general">
      <div className="container-categories">
        {icons.map((item) => (
          <IconsCategories key={item.name} icon={item} />
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
