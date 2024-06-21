import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const db = async()=>{
    try {
        const connectioninstance = await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        console.log('/n Mongodb successfully connected !! at port : ${connectioninstance.connection.host}')
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}

export default db