import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FilterContext";
// import products from "../data/locations.json";
import getLocations from "./getLocations";

const useFilters = () => {
  const { filters, setFilters, products } = useContext(FiltersContext);

  // useEffect(() => {
  //   // Realizar la carga inicial de datos al montar el componente
  //   const fetchData = async () => {
  //     try {
  //       const data = await getLocations.all();
  //       setProducts(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error al obtener datos del servidor:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
