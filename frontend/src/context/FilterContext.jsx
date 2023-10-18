import { createContext, useState } from "react";

export const FiltersContext = createContext();

// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    categories: "all",
    amenities: [],
    propertyType: "any",
  });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
