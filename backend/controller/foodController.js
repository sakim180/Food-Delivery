import { model } from "mongoose";
import foodModel from "../models/foodModel.js"
import fs from 'fs'
const addFood=async(req,res)=>{
    console.log(req.file.filename)
  
    const image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
   try{
    await food.save()
    res.json({'success':true,'messgae':"food added"})
   }
   catch(err){
    console.log(err)
    res.json({'success':false,'messgae':err})

   }



}
//all food list

const foodlist=async(req,res)=>{
    try{
     const data= await  foodModel.find({})
     console.log(data)
    
     res.json({success:true,data:data})
    }
    catch(err){
        res.json({success:false,message:err})


    }



}
//remove food
const removefood=async(req,res)=>{
   console.log("call")
   
    try{
         console.log("iddd",req.body.id)
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
     const response=   await foodModel.findByIdAndDelete(req.body.id)
        
        if(response){
             res.json({success:true,message:'item delete successfuly'})

        }
 }
    catch(err){

 res.json({"success":false,"message":err})
    }
    

}
export {addFood,foodlist,removefood}
