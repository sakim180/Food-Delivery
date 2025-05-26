import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/Photo/assets'

const Login = ({setLogin}) => {
  const [currentState,setCurrenetState]=useState("Sign-Up")
  
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={()=>{setLogin(false)}} src={assets.cross_icon} alt="" />

        </div>
        <div className='login-popup-inputs'>
          {currentState==='Sign-Up'? <input type="text" placeholder='Your Name' required/>:<></>}
         
          <input type="email" placeholder='Your email' required/>
          <input type="password" placeholder='password' required/>
        </div>
        <button>{currentState==='Sign-Up'?"Create Account":"Login"}</button>
        {currentState==='Sign-Up'?
         <div className='login-popup-condition'>
          <input type="checkbox" required/>
          <p>By counting, i agree to the terms of use & privacy policy.</p>
         </div>:<></>
          }
         {currentState==='Sign-Up'?<p>Already have an account?<span onClick={()=>{setCurrenetState('Log-In')}}>Login here</span></p>: <p>Create a new account?<span onClick={()=>{setCurrenetState('Sign-Up')}}>Click Here</span></p>}
        
      </form>
     
        
        



        
        
      
    </div>
  )
}

export default Login
