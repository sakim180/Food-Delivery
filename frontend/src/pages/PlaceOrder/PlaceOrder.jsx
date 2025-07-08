import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css'

import { StoreContext } from '../../Context/StoreContex'
import axios from 'axios'



const PlaceOrder = () => {
  const navigate= useNavigate()
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""


  })
  const onChangeHandler=(e)=>{
   
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[name]:value})
   console.log(formData)


  }

  const placeOrder=async(e)=>{
     e.preventDefault();
     const orderItems=[];
    
     food_list.map((item)=>{
      if(cartItems[item._id]>0){
       
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id]
         orderItems.push(itemInfo);

      }

     })
     let orderData={
      address:formData,
      items:orderItems,
      amount:getTotalCartAmount()+2,
      

     }
     let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    console.log(response)
  if(response.data.success){
    const {session_url}=response.data;
    window.location.replace(session_url)
  }else{
    alert("error")
  }


  }
  useEffect(()=>{
if(!token){
  navigate('/cart')}
  else if(getTotalCartAmount()===0){
navigate('/cart')
  }
 



  },[token])



  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className='multi-fields'>
          <input required name='firstName' onChange={(e)=>onChangeHandler(e)} value={formData.firstName} type="text" placeholder='First Name' />
           <input required name='lastName' onChange={(e)=>onChangeHandler(e)} value={formData.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={(e)=>onChangeHandler(e)} value={formData.email} type="email" placeholder='Email Adress' />
         <input  required name='street' onChange={(e)=>onChangeHandler(e)} value={formData.street} type="text" placeholder='Street' />
         <div className='multi-fields'>
          <input required  name='city' onChange={(e)=>onChangeHandler(e)} value={formData.city} type="text" placeholder='City' />
           <input required name='state' onChange={(e)=>onChangeHandler(e)} value={formData.state} type="text" placeholder='state' />
        </div>
        <div className='multi-fields'>
          <input required name='zipcode' onChange={(e)=>onChangeHandler(e)} value={formData.zipcode} type="text" placeholder='Zip Code' />
           <input required name='country' onChange={(e)=>onChangeHandler(e)} value={formData.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={(e)=>onChangeHandler(e)} value={formData.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right"></div>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()?2:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()?getTotalCartAmount()+2:0}</b>
            </div>
          </div>
          <button type='submit' >PROCEED TO PAYMENT</button>
        </div>

    </form>

      
    
  )
}

export default PlaceOrder
