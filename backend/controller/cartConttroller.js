import userModel from '../models/userModel.js';
//add items to user cart
const addToCart=async(req,res)=>{
    try{
        let userData=await userModel.findOne({_id:req.body.userId})
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
           cartData[req.body.itemId]=1;

        }
        else{
             cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added To Cart"})
    }
    catch(err){
console.log("add to cart",err)
  res.json({success:false,message:"err",err})
    }


}

//remove from cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Validate input
    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "Missing userId or itemId" });
    }

    // Fetch user
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Access cart data
    const cartData = { ...userData.cartData }; // clone object to avoid mutation issues

    // Check if item exists and quantity is > 0
    if (cartData[itemId] && cartData[itemId] > 0) {
      cartData[itemId] -= 1;

     

      // Update user document
      await userModel.findByIdAndUpdate(userId, { cartData });

      return res.json({ success: true, message: "Item removed successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Item not in cart or already 0" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};

//get from cart
const getFromCart=async(req,res)=>{
    try{
const {userId}=req.body;

    let userData=await userModel.findById(userId);
    let cartData=userData.cartData;
  return  res.json({success:true,cartData})

    }catch(err){
        console.log(err)
        return  res.json({success:false,err})
    }
    
    

}
export {addToCart,removeFromCart,getFromCart};