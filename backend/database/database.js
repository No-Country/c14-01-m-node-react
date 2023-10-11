import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()
const mongoUri = process.env.MONGO_URI

const database = {
    connect : async function(){
        try {
            await mongoose.connect(mongoUri);
            console.log("database connected");
        } catch (error) {
            console.log("database connection error");
        }
    }
}

export default database;

/* mongoose.set("strictQuery" , true)
mongoose
    .connect(mongoUri,{userNewUrlParser : true})
    .then(() => console.log("Base de datos conectada"))
    .catch(err => console.log("Error :  " + err)) */