import mongoose from "mongoose"

const userCollection = "Users"

const userSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : {
        type: String,
        unique: true,
    },
    password : String,
    age: Number,
    role : {
        type: String,
        enum: ["inquilino", "propietario"],
        default: "inquilino"
    },
    cart : {
        type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: "carts",
    },
    documents: [
        {
            _id: false,
            name: {type: String},
            reference: {type: String}
        }
    ],
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;