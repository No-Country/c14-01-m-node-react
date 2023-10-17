import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const getFilteredProducts = (products) => {
    return products.filter(
      (product) =>
        product.price > filters.minPrice &&
        product.price < filters.maxPrice &&
        (filters.categories == "all" ||
          product.categories.includes(filters.categories))
    );
  };
  return { filters, setFilters, getFilteredProducts };
};

export default useFilters;