import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import { connectdb } from './config/mongodb.js'
import bodyParser from 'body-parser'
import foodRouter from './routes/foodRoutes.js'
import router from './routes/userRoute.js'



//config
const app=express()
const PORT=process.env.PORT || 9000;
connectdb()



app.use(cors({
  origin: '*'
}));
//middleware
app.use(express.json())
app.use(bodyParser.json())

//routes endpoint

app.use('/api/food',foodRouter)
app.use('/api/auth',router)
app.use('/images',express.static('uploads'))




app.listen(PORT,()=>{
    console.log(`server run on port:${PORT}`)
})


