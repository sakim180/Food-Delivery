import axios from "axios";
import { createContext, useState } from "react";

import { useEffect } from "react";
const url = import.meta.env.VITE_API_URL; 

export const StoreContext=createContext(null);



const StoreContextProvider=(props)=>{
  const [food_list,setFoodList]=useState([])
  const [token,settoken]=useState("");
 
const [cartItems,setCartItems]=useState({})


const loadCardData=async(token)=>{
  try{ 
    const response=await axios.post(url+"/api/cart/getitem",{},{headers:{token}})
setCartItems(response.data.cartData)
}catch(err){
  console.log("err from loadCart Data",err)
}
 

}

 async function  addItem(itemId){


   if(!cartItems[itemId]){
    
     setCartItems((prev)=>({...prev,[itemId]:1}));

   }
   else{
   
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
   try{ 
      await axios.post(url+"/api/cart/additem",{itemId},{headers:{token}})
      }
   catch(err){
    console.log("err",err)
   }



}
async function removeItem(itemId){
 setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 try{
  await axios.post(url+"/api/cart/removeitem",{itemId},{headers:{token}})

 }catch(err){
  console.log("err from remove item",err)

 }
}
const getTotalCartAmount=()=>{
  let totalAmount =0;
  for(const item in cartItems){

    if(cartItems[item]>0){
      let itemInfo = food_list.find((product)=>product._id===item)
     
    totalAmount += itemInfo.price* cartItems[item];
    }
    
  }
  return totalAmount;
}
const getFood=async()=>{
  const response=await axios.get(url+"/api/food/foodlist")
setFoodList(response.data.data);


}

const contextValue={
  food_list,
  addItem,
  cartItems,
  setCartItems,
  removeItem,
  getTotalCartAmount,token,settoken,url
} 

useEffect(()=>{
  async function loadData(params) {
    await  getFood()
     if(localStorage.getItem("token")){
    settoken(localStorage.getItem("token"))
   await  loadCardData(localStorage.getItem("token"))

  }
    
  }
 
 loadData()
 
},[])

return (
 <StoreContext.Provider value={contextValue}>

     {props.children}
 </StoreContext.Provider>



)





}
export default StoreContextProvider