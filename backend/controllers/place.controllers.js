import houseModel from "../models/placeModel.js";

export const allPlaces = async (req, res) => {
    try {
      // Utiliza el modelo houseModel para encontrar todas las viviendas en la base de datos
      const houses = await houseModel.find();
  
      res.status(200).json(houses); // Devuelve todas las viviendas en la respuesta
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las viviendas" });
    }
  }

export const placesById = async (req, res) => {
    try {
      const { _id } = req.params; // Obtén el ID de la URL
  
      // Utiliza el modelo houseModel para encontrar la vivienda por su ID en la base de datos
      const house = await houseModel.findById(_id);
  
      if (!house) {
        return res.status(404).json({ error: "Vivienda no encontrada" });
      }
  
      res.status(200).json(house); // Devuelve la vivienda encontrada en la respuesta
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la vivienda" });
    }
  }

export const updateById = async (req, res) => {
    try {
      const { _id } = req.params; // Obtén el ID de la URL
      const updateData = req.body; // Los datos de actualización se envían en el cuerpo de la solicitud
  
      // Utiliza el modelo houseModel para buscar y actualizar la vivienda por su ID
      const updatedHouse = await houseModel.findByIdAndUpdate(_id, updateData, {
        new: true,
      });
  
      if (!updatedHouse) {
        return res.status(404).json({ error: "Vivienda no encontrada" });
      }
  
      res.status(200).json(updatedHouse); // Devuelve la vivienda actualizada en la respuesta
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la vivienda" });
    }
  }

export const deleteById = async (req, res) => {
    try {
      const _id = req.params; // Obtén el ID de la URL
  
      // Utiliza el modelo houseModel para buscar y eliminar la vivienda por su ID
      const deletedHouse = await houseModel.findByIdAndDelete(_id);
  
      if (!deletedHouse) {
        return res.status(404).json({ error: "Vivienda no encontrada" });
      }
  
      res.status(200).json({ message: "Vivienda eliminada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la vivienda" });
    }
  }

export const createPlace = async (req, res) => {
    try {
      const houseData = req.body; // Los datos de la casa se envían en el cuerpo de la solicitud
  
      // Crear una nueva instancia de la casa utilizando el modelo importado
      const newHouse = new houseModel(houseData);
  
      // Guardar la casa en la base de datos
      await newHouse.save();
  
      res.status(201).json(newHouse); // Devolver la casa creada en la respuesta
    } catch (error) {
      res.status(500).json({ error: "Error al crear la casa" });
    }
  }
