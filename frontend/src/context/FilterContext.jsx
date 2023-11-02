import { createContext, useEffect, useState } from "react";
import getLocations from "../utils/getLocations";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";

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
  const [product, setProduct] = useState(null);
  const [userLog, setUserLog] = useState(null);
  const { user } = useSelector((state) => state?.auth);
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
  }, [products]);

  useEffect(() => {
    const parseToken = async (token) => {
      const myDecodedToken = token ? await decodeToken(token) : null;
      if (myDecodedToken) {
        const nameParts = myDecodedToken.name.split(" ");
        return {
          first_name: nameParts[0],
          last_name: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
          email: myDecodedToken.email,
        };
      }
    };

    const fetchData = async () => {
      try {
        const data = await getLocations.all();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
      }
    };

    const fetchUserLog = async () => {
      console.log(user);
      const parse = await parseToken(user.token); // Espera a que la promesa se resuelva.
      setUserLog(parse); // Asigna el valor resultante.
    };

    fetchData(); // Llama a esta función para cargar los datos antes de llamar a fetchUserLog.
    fetchUserLog();
  }, [user]);

  useEffect(() => {
    console.log(userLog); // Esto debería mostrar el valor actualizado de `userLog`.
  }, [userLog]);

  const loadProduct = async (id) => {
    try {
      const productData = await getLocations.oneLocation(id);
      setProduct(productData);
    } catch (error) {
      console.error("Error al cargar el producto individual:", error);
    }
  };

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, products, product, loadProduct, userLog }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
