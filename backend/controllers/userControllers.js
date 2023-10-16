import userModel from "../models/usermodel.js";
import userManager from "../mongo/users.mongo.js";
import { UserDTO } from "../mongo/dtos/user.dto.js";
import { isValidPassword } from "../utils/utils.js";
import jwt from "jsonwebtoken";

import config from "../utils/config.js";

const {COOKIE_NAME, JWT_SECRET} = config;

const usermanager = new userManager();


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

export const login = async (req, res) => {
    try {
      const {email,password}=req.body;
          
          const user = await usermanager.getUserByEmail(email);
  
          if(!user) return res.status(401).send({status: "error", error :"User does not exist"});
  
          if(!isValidPassword(user, password)) return res.status(401).send({status: "error", error :"Invalid credentials"});
          
          const userDTO = new UserDTO(user);
          const jwtUser = JSON.parse(JSON.stringify(userDTO));
  
          const token = jwt.sign(jwtUser,JWT_SECRET, {expiresIn: "24h"})
  
          return res
          .cookie(COOKIE_NAME, token, {httpOnly: true})
          .send({status:"success", message:"Logged in"})
  
    } catch (error) {
        console.log(error);
      return res.status(500).send({ status: 'error', error: 'Login failed'})
      
    }
  }

export const logout = async (req, res) => {
    try {
        /* const { jwtCookie: token } = req.cookies
        const Token = jwt.verify(token, JWT_SECRET, {
        ignoreExpiration: true,
      }); */

    return res
        .clearCookie(COOKIE_NAME)
        .send({ status: 'success', message: 'Logout successful!' })

    } catch (error) {
        console.log(error);
        return res.status(404).send({ status: 'error', error: 'Log out failed'})
    }

}
