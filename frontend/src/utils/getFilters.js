import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";

const getFilterCategory = (category, listProperties) => {
  return listProperties.filter((property) => {
    return property.categories.includes(category);
  });
};

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const getFilteredProducts = (products) => {
    return products.filter(
      (product) =>
        product.price > filters.minPrice &&
        product.price < filters.maxPrice &&
        (filters.category == "all" ||
          filters.categories.includes(filters.categories))
    );
  };
  return { filters, setFilters, getFilteredProducts };
};

export { getFilterCategory, useFilters };
