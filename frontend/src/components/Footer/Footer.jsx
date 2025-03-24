import React from 'react'
import './Footer.css'
import { assets } from '../../assets/Photo/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Temporibus non accusamus sed, saepe praesentium <br/>ut nam ducimus nostrum modi numquam?</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                
            </div>
            <div className='foter-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 62890-06194</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>


        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @Tomato.com - All Right Reserved</p>

      
    </div>
  )
}

export default Footer
