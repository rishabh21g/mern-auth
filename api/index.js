import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config({
    path:"./.env"
})
const app = express()
console.log(process.env.MONGO)


const connectDB = async ()=>{
    try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGO}/mern-auth`)
      console.log("Success", connectionInstance.connection.host)
    
    }catch(err){
        console.error("ERROR" , err.message)
        process.exit(1)
    }

}
connectDB().then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`Server is listening on port ${process.env.PORT}`)
    })

})















app.listen(3000 , ()=>{
    console.log(`Server is running on port 3000`)
})