import mongoose from 'mongoose';
import config from '../utils/config.js';

const {DB_URL} = config;

const database = {
    connect : async function(){
        try {
            await mongoose.connect(DB_URL);
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
