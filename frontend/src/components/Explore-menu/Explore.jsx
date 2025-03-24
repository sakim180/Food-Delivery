import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/Photo/assets'
const Explore = ({category,setcategory}) => {
  return (
    <div  className='explore-menu' id='explore-menu'>
        <h2>Explore our menu</h2>

        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable arry of dishes. our mission is to satisfy our craving and elevoteebyour dining experience.one delicious meal at a time.</p>

        <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
         return(
            <div key={index} className='explore-menu-list-item'>
            <img onClick={()=>{setcategory(item.menu_name)}} className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
            </div>
                 )
              }
            
        
        )}
        
        </div>

        <hr />
      
    </div>
  )
}

export default Explore
