export const registerUser = async (req, res) => {
    try {
        return res
        .status(201)
        .send({ status: "success", message: "User registered" });
    } catch (error) {
        console.log(`Failed to register user: ${error}`);
        return res
        .status(404)
        .send({ status: "error", error: "Failed to register user" });
    }
  };

  export const failRegister = async (req, res) => {
    return res
      .status(409)
      .send({ status: "error", message: "User already exists" });
};

