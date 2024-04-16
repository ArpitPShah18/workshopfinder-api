import dotenv from 'dotenv';
dotenv.config();
import { workshops } from './data/workshops.js'
import workshop from './models/workshopModel.js'
import connectDB from "./config/db.js";

connectDB()

 export const importData = async() =>{
    try{

        await workshop.deleteMany()

        const createdWorkshops = await workshop.insertMany(workshops)
        process.exit(0)
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async() =>{
    try{

        await workshop.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit(1)
    }catch(error){
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}