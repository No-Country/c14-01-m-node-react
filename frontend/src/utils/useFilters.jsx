import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";
import products from "../data/locations.json";

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const getFilteredProducts = () => {
    return products.filter(
      (product) =>
        product.price > filters.minPrice &&
        product.price < filters.maxPrice &&
        (filters.categories == "all" ||
          product.categories.includes(filters.categories)) &&
        (filters.amenities.length == 0 ||
          product.amenities.some((item) => filters.amenities.includes(item)))
    );
  };
  const getFilterByLocation = (id) => {
    return products.find((product) => product.id == id);
  };
  return { filters, setFilters, getFilteredProducts, getFilterByLocation };
};

export default useFilters;
