import { createContext, useState } from "react";
import { food_list } from "../assets/Photo/assets";
import { useEffect } from "react";


export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
const [itemCount,setItemCount]=useState({})


function addItem(itemId){


   if(!itemCount[itemId]){
    
     setItemCount((prev)=>({...prev,[itemId]:1}));

   }
   else{
   
    setItemCount((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
}
function removeItem(itemId){
 setItemCount((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
useEffect(()=>{
 console.log(itemCount)
},[itemCount])


const contextValue={
  food_list,
  addItem,
  itemCount,
  setItemCount,
  removeItem
} 

return (
 <StoreContext.Provider value={contextValue}>

     {props.children}
 </StoreContext.Provider>



)





}
export default StoreContextProvider