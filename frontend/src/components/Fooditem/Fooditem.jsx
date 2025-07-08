
import './Fooditem.css'
import { assets } from '../../assets/Photo/assets'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContex';


const Fooditem = ({ id, name, price, description, image }) => {
  const {cartItems,addItem,removeItem,url}=useContext(StoreContext);
 

  return (
    <div className="food-item">
   
      <div className="food-item-image-container">
        <img src={`${url+"/images/"+image}`} alt="" className="food-item-image" />
        {!cartItems[id]
        ?<img src={assets.add_icon_white} onClick={()=>{addItem(id)}} alt="" className="add" />  
        : <div className='food-item-counter'>
          <img src={assets.add_icon_green} onClick={()=>{addItem(id)}}   />
          {cartItems[id]}
          <img src={assets.remove_icon_red} onClick={()=>{removeItem(id)}}  />
        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
