import axios from "axios";
const getLocations = {
  all: async () => {
    try {
      const data = await axios.get("https://c14-01-m-node-react-production.up.railway.app/api/places");
      return data.data;
    } catch (error) {
      console.error("Error al obtener los datos del servidor", error);
    }
  },
  oneLocation: async (id) => {
    try {
      const data = await axios.get(`https://c14-01-m-node-react-production.up.railway.app/api/places/${id}`);
      return data.data;
    } catch (error) {
      console.error("Error al obtener los datos del servidor", error);
    }
  },
};

export default getLocations;
