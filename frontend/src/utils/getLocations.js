import axios from "axios";
import location from "../data/locations.json";
const getLocations = {
  all: async () => {
    try {
      // const data = await axios.get("http://localhost:8080/api/places");
      return location;
    } catch (error) {
      console.error("Error al obtener los datos del servidor", error);
    }
  },
  oneLocation: async (id) => {
    try {
      const data = await axios.get(`http://localhost:8080/api/places/${id}`);
      return data.data;
    } catch (error) {
      console.error("Error al obtener los datos del servidor", error);
    }
  },
};

export default getLocations;
