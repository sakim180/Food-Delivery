import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContex";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate()
  const {url, cartItems, food_list,removeItem,getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartItems[items._id]) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url+"/images/"+items.image}`} alt="" />
                  <p>{items.name}</p>
                  <p>{items.price}</p>
                  <p>{cartItems[items._id]}</p>
                  <p>{items.price * cartItems[items._id]}</p>
                  <p onClick={()=>{removeItem(items._id)}} className="cross"> 𐤕</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>{navigate("/order")}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have promo code .Enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code"/>
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
