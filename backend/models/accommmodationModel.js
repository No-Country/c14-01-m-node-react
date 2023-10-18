import mongoose from "mongoose";

const accommodationsCollection = "accommodations";

const accommodationSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    adress : String,
    assesment : String,
    ownerInformation : String,
    details : String,
    type : String,
})

const accommodationModel = mongoose.model(accommodationsCollection, accommodationSchema);

export default accommodationModel;