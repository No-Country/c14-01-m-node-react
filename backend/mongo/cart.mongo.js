import cartModel from "../models/cartModel.js";

export default class Cart {

    constructor (){

    }

    getCarts = async () =>{
        try {
            const carts = await cartModel.find();
            return carts;
        } catch (error) {
            console.log(error);
        }
    }

    createCart = async () => {
        try {
            const newCart = await cartModel.create({
            products: []
            })
            return newCart;
        }catch (error) {
        console.log(error);
        }
    };

    getCartById =async (id) =>{
        try {
            const cartById = await cartModel.findOne({_id:id}).lean();
            return cartById;
        } catch (error) {
            console.log(error);
        }
    }

    deleteCart = async (cartId) => {
        try {

            const deletedCart = await cartModel.deleteOne({ _id: cartId });
            return deletedCart;
            
        } catch (error) {
            console.log(error);
        }
    };







}