import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContex'
import axios from 'axios'
import {assets} from '../../assets/photo/assets'

import './myorder.css'

const Myorders = () => {
const {url,token}=useContext(StoreContext)
const [data,setData]=useState([])
  const myOrder=async()=>{
    
      const response=await axios.post(url+"/api/order/user-order",{},{headers:{token}})
    
     
      setData(response.data.data)
   

  }
  useEffect(()=>{
    myOrder()
  },[token])
   console.log(data)
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
       
        {
          data.map((order,index)=>{
            return(
               <div key={index} className='my-orders-order'>
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name+"x"+item.quantity

                  }else{
                    return item.name+"x"+item.quantity+","


                  }
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items:{order.items.length}</p>
                <p>
                  <span>&#x25cf;</span>
                  <b>{order.status}</b>
                </p>
                <button>Track order</button>

               </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Myorders