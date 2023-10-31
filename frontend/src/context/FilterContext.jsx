import { createContext, useEffect, useState } from "react";
import getLocations from "../utils/getLocations";

export const FiltersContext = createContext();

// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    categories: "all",
    amenities: [],
    propertyType: "any",
    location: null,
    checkInDate: null,
    checkOutDate: null,
    guests: 0,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLocations.all();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, products }}>
      {children}
    </FiltersContext.Provider>
  );
}
