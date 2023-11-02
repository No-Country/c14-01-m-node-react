import { useState } from "react";
import icons from "../../assets/icons";
import useFilters from "../../utils/useFilters";
import IconsCategories from "./IconsCategories";
import ModalFilter from "../Filters/ModalFilters";

const Categories = () => {
  const { filters, setFilters } = useFilters();
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: category,
    }));
  };

  return (
    <div className="container-categories-general">
      <div className="container-categories">
        {icons.map((item) => (
          <div key={item.name} onClick={() => handleClick(item.name)}>
            <IconsCategories icon={item} />
          </div>
        ))}
      </div>
      <div className="filters" onClick={() => setModalShow(true)}>
        <img src="icons/options.png" alt="filter" />
        <div>Filters</div>
      </div>
      <ModalFilter show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Categories;
