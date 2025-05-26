import { createContext, useState } from "react";
import { food_list } from "../assets/Photo/assets";
import { useEffect } from "react";


export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
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
useEffect(()=>{
 console.log("cartitems",cartItems)
},[cartItems])


const contextValue={
  food_list,
  addItem,
  cartItems,
  setCartItems,
  removeItem
} 

return (
 <StoreContext.Provider value={contextValue}>

     {props.children}
 </StoreContext.Provider>



)





}
export default StoreContextProvider