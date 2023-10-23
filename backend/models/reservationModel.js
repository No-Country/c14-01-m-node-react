import mongoose from "mongoose";

const reservartionCollection = "Reservations";

const reservartionSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref : "Users",
    },
    first_name : String,
    last_name : String,
    email: String,
    placeId : {
        type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref : "houseCollection",
    },
    title: String,
    price : Number,
    location: String,
    initialDate : Date,
    endDate : Date,
    guests : Number
});

const reservartionModel = mongoose.model(reservartionCollection, reservartionSchema);

export default reservartionModel;