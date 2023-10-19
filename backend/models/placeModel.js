import mongoose from "mongoose";

const houseCollection = "houseCollection";

const houseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    adress : String,
    assesment : String,
    ownerInformation : String,
    details : String,
    type : String,
})

const houseModel = mongoose.model(houseCollection, houseSchema);

export default houseModel