import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";

const useFilters = () => {
  const { filters, setFilters, products } = useContext(FiltersContext);

  const getFilteredProducts = () => {
    return (
      products &&
      products.filter(
        (product) =>
          product.price > filters.minPrice &&
          product.price < filters.maxPrice &&
          (filters.categories == "all" ||
            product.categories.includes(filters.categories)) &&
          (filters.amenities.length == 0 ||
            product.amenities.some((item) => filters.amenities.includes(item)))
      )
    );
  };
  const getFilterByLocation = (id) => {
    return products && products.find((product) => product._id == id);
  };
  return { filters, setFilters, getFilteredProducts, getFilterByLocation };
};

export default useFilters;
