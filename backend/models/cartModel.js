import mongoose from "mongoose";

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    bookings: [
    {
        booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "accommmodations",
        },
        quantity: {
        type: Number,
        default: 1,
        required: true,
        },
    },
    ],
});

cartsSchema.pre('find', function () {
    this.populate("bookings.booking")
})
cartsSchema.pre('findOne', function () {
    this.populate("bookings.booking")
})

const cartModel = mongoose.model(cartsCollection, cartsSchema);

export default cartModel;