import axios from "axios";
const getLocations = {
  all: async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/places");
      return data.data;
    } catch (error) {
      console.error("Error al obtener los datos del servidor", error);
    }
  },
};

export default getLocations;
