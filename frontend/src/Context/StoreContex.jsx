import { createContext, useState } from "react";
import { food_list } from "../assets/Photo/assets";
import { useEffect } from "react";


export const StoreContext=createContext(null);



const StoreContextProvider=(props)=>{
  const [token,settoken]=useState("");
 
const [cartItems,setCartItems]=useState({})

function addItem(itemId){


   if(!cartItems[itemId]){
    
     setCartItems((prev)=>({...prev,[itemId]:1}));

   }
   else{
   
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
}
function removeItem(itemId){
 setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
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

const contextValue={
  food_list,
  addItem,
  cartItems,
  setCartItems,
  removeItem,
  getTotalCartAmount,token,settoken
} 

useEffect(()=>{
  
  if(localStorage.getItem("token")){
    settoken(localStorage.getItem("token"))

  }
},[])

return (
 <StoreContext.Provider value={contextValue}>

     {props.children}
 </StoreContext.Provider>



)





}
export default StoreContextProvider