import { useContext } from "react";
import { FiltersContext } from "../context/FilterContext";

const useFilters = () => {
  const { filters, setFilters, products } = useContext(FiltersContext);

  const getFilteredProducts = () => {
    return (
      products &&
      products.filter((product) => {
        const priceFilter =
          product.price > filters.minPrice && product.price < filters.maxPrice;
        const categoryFilter =
          filters.categories == "all" ||
          product.categories.includes(filters.categories);
        const locationFilter =
          !filters.location ||
          product.location
            .toUpperCase()
            .includes(filters.location.toUpperCase());
        const amenitiesFilter =
          filters.amenities.length == 0 ||
          product.amenities.some((item) => filters.amenities.includes(item));
        const dateFilter =
          !filters.checkInDate ||
          !filters.checkOutDate ||
          (product.initialDate <= filters.checkInDate &&
            product.endDate >= filters.checkOutDate);
        return (
          priceFilter &&
          categoryFilter &&
          locationFilter &&
          dateFilter &&
          amenitiesFilter
        );
      })
    );
  };
  const getFilterByLocation = (id) => {
    return products && products.find((product) => product._id == id);
  };
  return { filters, setFilters, getFilteredProducts, getFilterByLocation };
};

export default useFilters;
