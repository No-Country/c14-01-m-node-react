import userModel from "../models/userModel.js";

export const allUser = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const usersById = async (req, res) => {
  try {
    const { _id } = req.params; // Obtiene el ID
    console.log(_id);
    const user = await userModel.findById(_id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const usersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);

    const user = await userModel.findOne({ email:email });
    console.log(user);

    if (user) {
      res.status(200).send({ message: "Usuario encontrado", user: user });
    } else {
      res.status(404).send({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "usuario no encontardo", error: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;

    const updatedUser = await userModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    if (updatedUser) {
      res
        .status(200)
        .json({ message: "Usuario actualizado con exito", user: updatedUser });
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {}
};

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await userModel.findOneAndDelete(_id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email,birthday, location, password, role } = req.body;

    const newUser = new userModel({
      first_name,
      last_name,
      birthday,
      location,
      email,
      password,
      role,
    });
    await newUser.save();

    res
      .status(201)
      .json({ mensaje: "Usuario creado con éxito", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario", error: error.message });
  }
};
