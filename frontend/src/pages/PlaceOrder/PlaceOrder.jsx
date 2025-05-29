import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContex'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' />
           <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Adress' />
         <input type="text" placeholder='Street' />
         <div className='multi-fields'>
          <input type="text" placeholder='City' />
           <input type="text" placeholder='state' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code' />
           <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
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
          <button onClick={()=>{navigate("/order")}}>PROCEED TO PAYMENT</button>
        </div>

    </form>

      
    
  )
}

export default PlaceOrder
