import userModel from "../models/userModel.js";

export default class UserManager {
    constructor() {}

    getUsers = async () => {
        try {
            const users = await userModel.find().lean();
            return users;
        } catch (error) {
            throw new Error(`Error while fetching users: ${error.message}`);
        }
    }

    getUserById = async (id) => {
        try {
            const user = await userModel.findOne({ _id: id });
            return user;
        } catch (error) {
            throw new Error(`Error while fetching user by ID: ${error.message}`);
        }
    }
    
    getUserByEmail = async (email) => {
        try {
            const user = await userModel.findOne({ email:email });
            return user;
        } catch (error) {
            throw new Error(`Error while fetching user by email: ${error.message}`);
        }
    } 

    createUser = async (user) => {
        try {
            const createdUser = await userModel.create(user);
            return createdUser;
        } catch (error) {
            throw new Error(`Error while creating a user: ${error.message}`);
        }
    }

    getUserByCartId = async (cartId) => {
        try {
            const user = await userModel.findOne({ cart: cartId });
            return user;
        } catch (error) {
            throw new Error(`Error while fetching user by cart ID: ${error.message}`);
        }
    }

    updateUser = async (query, update) => {
        try {
            const updatedUser = await userModel.updateOne(query, update);
            return updatedUser;
        } catch (error) {
            throw new Error(`Error while updating user: ${error.message}`);
        }
    }

    deleteUserById = async (id) => {
        try {
            const userDeleted = await userModel.deleteOne({ _id: id });
            return userDeleted;
        } catch (error) {
            throw new Error(`Error while deleting user by ID: ${error.message}`);
        }
    }

    deleteManyUsers = async (users) => {
        try {
            const deleteUsers = await userModel.deleteMany({ cart: { $in: users } });
            return deleteUsers;
        } catch (error) {
            throw new Error(`Error while deleting multiple users: ${error.message}`);
        }
    }
}
