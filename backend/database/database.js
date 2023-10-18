import mongoose  from "mongoose"
import dotenv  from "dotenv"

dotenv.config()
const mongoUri = process.env.MONGO_URI

const database = {
    connect : async function(){
        try {
            await mongoose.connect(mongoUri)
            console.log("DB connect")
        } catch (error) {
            console.log("DB error connection")
        }
    }
}



export default database