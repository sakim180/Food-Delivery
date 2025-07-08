import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const url = process.env.FRONTEND_URL;

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address:req.body.address
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));
  
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${url}/verify?false=true&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (err) {
   
     res.json({ success:false, message:err});
     console.log(err)
  }
};

const userOrder=async(req,res)=>{
  console.log("user order")
  try{
    const {userId}=req.body;
   const orders= await orderModel.find({userId:userId})
   res.json({success:true,data:orders})


  }
  catch(err){
    console.log("error from userOrder",err)
    res.json({success:false,message:"err"})

  }

}


const verifyOrder=async(req,res)=>{
  const {orderId,success}=req.body;

  try{
    if(success=="true")
      {
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({success:true,message:"paid"})

    }
    else{
      await orderModel.findByIdAndUpdate(orderId);
        res.json({success:false,message:"Not paid"})
    }
  }catch(err){
      res.json({success:false,message:"something went wrong",err})

  }


}

export { placeOrder,verifyOrder,userOrder };
