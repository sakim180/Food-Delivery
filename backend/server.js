import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import { connectdb } from './config/mongodb.js'
import bodyParser from 'body-parser'
import foodRouter from './routes/foodRoutes.js'
import router from './routes/userRoute.js'
import cartRouter from './routes/cartrouter.js'
import orderRouter from './routes/orderRoute.js'



//config
const app=express()
const PORT=process.env.PORT || 9000;
connectdb()



const allowedOrigins = [
  'http://localhost:5173',
  'https://food-delivery-dun-chi.vercel.app/'
];

// ✅ CORS middleware config
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('❌ Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ Handle preflight
app.options('*', cors(corsOptions));



//middleware
app.use(express.json())
app.use(bodyParser.json())
 // ✅ for JSON requests
app.use(express.urlencoded({ extended: true }));

//routes endpoint
app.get('/', (req, res) => {
  res.json({ message: true, success: "ffg" });
});
app.use('/api/food',foodRouter)
app.use('/api/auth',router)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use('/images',express.static('uploads'))




app.listen(PORT,()=>{
    console.log(`server run on port:${PORT}`)
})


