import './Nav.css'
import { assets } from '../../../../frontend/src/assets/Photo/assets'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { StoreContext } from '../../Context/StoreContex';


const Nav = ({setLogin}) => {
  const navigate=useNavigate();
  const {token,settoken}=useContext(StoreContext);
  const {getTotalCartAmount}=useContext(StoreContext)
  const [menu,setMenu]=useState("home");

  const logout=()=>{
    localStorage.removeItem("token")
    settoken("");
    navigate("/")
   

  
  }
  return (
    <div className='navbar'>
     <Link to={'/'}>
      <img src={assets.logo} alt="logo" className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
      <a href='#app-download' onClick={()=>{setMenu("mobail-app")}}  className={menu==="mobail-app"?"active":""}>mobail-app</a>
      <a href='#footer' onClick={()=>{setMenu("contact-us")}}  className={menu==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">

         <Link to={'/Cart'}> <img src={assets.basket_icon} alt="basket-icon"  /></Link>
          <div className={getTotalCartAmount()&&'dot'}></div>
       

        </div>
       {!token? 
        <button className='sign' onClick={()=>{setLogin(true)}}>Sign In</button>
      :<div className='navbar-profile'>
        <img src={assets.profile_icon} alt="" />
        <ul className='nav-profile-dropdown'>
          <li onClick={()=>{navigate("/myorders")}}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={()=>{logout()}}> <li><img src={assets.logout_icon} alt="" /><p>Logout</p></li></li>
        </ul>
      </div>}
      </div>

    </div>
  )
}

export default Nav