import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "../api/routes/user.route.js"
import authRoute from "../api/routes/auth.route.js"


dotenv.config({
    path:"./.env"
})
const app = express();
app.use(express.json());


const connectDB = async ()=>{
    try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGO}/mern-auth`)
      console.log("Success", connectionInstance.connection.host)
    
    }catch(err){
        console.error("ERROR: " , err.message)
        process.exit(1)
    }

}
connectDB().then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`Server is listening on port ${process.env.PORT}`)
    })

})

app.use("/api/user" , userRoute)
app.use("/api/auth" , authRoute)


app.listen(3000 , ()=>{
    console.log(`Server is running on port 3000`)
})