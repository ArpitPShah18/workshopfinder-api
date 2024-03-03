
import mongoose from "mongoose";


console.log("db",process.env.MONGODB_URI)
const connectDB = async() =>{
    console.log("in")
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch (error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB