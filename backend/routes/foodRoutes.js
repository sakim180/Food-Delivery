import express from 'express'
import { addFood,foodlist,removefood } from '../controller/foodController.js'
import multer from 'multer'

const foodRouter=express.Router()

//image storage engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        console.log('image')
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})
const upload=multer({storage:storage})


foodRouter.post('/add-food',upload.single("image"),addFood)
foodRouter.get('/foodlist',foodlist)
foodRouter.delete('/delete-item',removefood)




export default foodRouter;