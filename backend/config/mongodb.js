import mongoose from "mongoose"

export const connectdb=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log('Db connected')
    }
    catch(err){
        console.log('err',err)

    }



}