import dotenv from "dotenv"
import db from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path: './env'
})



db()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log('server is running on : ${process.env.PORT}')
    })
})
.catch((err)=>{
    console.log("mongodb connection failed", err)
})













// (async()=>{
//     try {
//        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
//     } catch (error) {
//         console.error("ERROR:" , error)
//         throw err
//     }
// })()