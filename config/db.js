
import mongoose from "mongoose";
import logToCloudWatch from '../utils/cloudwatchLogger.js';
const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
        logToCloudWatch(`MongoDB Connected: ${conn.connection.host}`)
    }catch (error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB