const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const mongoUri = process.env.MONGO_URI

mongoose.set("strictQuery" , true)
mongoose
    .connect(mongoUri,{userNewUrlParser : true})
    .then(() => console.log("Base de datos conectada"))
    .catch(err => console.log("Error :  " + err))