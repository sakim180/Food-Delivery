import './Nav.css'
import { assets } from '../../../../frontend/src/assets/Photo/assets'
import { useState } from 'react'
import {Link} from 'react-router-dom';
const Nav = ({setLogin}) => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <ul className='navbar-menu'>
      <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
      <a href='#app-download' onClick={()=>{setMenu("mobail-app")}}  className={menu==="mobail-app"?"active":""}>mobail-app</a>
      <a href='#footer' onClick={()=>{setMenu("contact-us")}}  className={menu==="contact-us"?"active":""}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">

          <img src={assets.basket_icon} alt="basket-icon" />
          <div className="dot"></div>
       

        </div>
        <button className='sign' onClick={()=>{setLogin(true)}}>sign in</button>
      </div>
    </div>
  )
}

export default Nav