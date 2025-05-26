import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContex";

const Cart = () => {
  const { cartItems, food_list,removeItem} = useContext(StoreContext);
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
                  <img src={items.image} alt="" />
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
    </div>
  );
};

export default Cart;
