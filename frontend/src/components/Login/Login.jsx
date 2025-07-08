import React, { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/Photo/assets';
import axios from 'axios';
import Swal from 'sweetalert2';
import { StoreContext } from '../../Context/StoreContex';
const url = import.meta.env.VITE_API_URL; // ✅ correct usage


const Login = ({ setLogin }) => {
  const {token,settoken}=useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign-Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const signUpIn = async (e) => {
    e.preventDefault(); // prevent form reload
    try {
      const response = await axios.post(
        `${url}/api/auth/${currentState === "Sign-Up" ? "register" : "login"}`,
        data
      );
     
      settoken(response.data.token)
    localStorage.setItem("token",response.data.token)
  
     
      
      Swal.fire(`${currentState} Successful`);
      setLogin(false); // maybe close the popup on success
    } catch (err) {
      console.error(err);
     
        Swal.fire({
  position: 'top-end', // 👈 top right
  icon: 'success',
  title: 'Something Went Wrong',
  showConfirmButton: false,
  timer: 1500,
  toast: true, // 👈 makes it look like a toast
});
      
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={signUpIn}>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="close" />
        </div>

        <div className='login-popup-inputs'>
          {currentState === 'Sign-Up' && (
            <input
              type="text"
              onChange={dataHandler}
              placeholder='Your Name'
              name='name'
              required
            />
          )}
          <input
            type="email"
            onChange={dataHandler}
            placeholder='Your Email'
            name='email'
            required
          />
          <input
            type="password"
            onChange={dataHandler}
            placeholder='Password'
            name='password'
            required
          />
        </div>

        <button type="submit">
          {currentState === 'Sign-Up' ? "Create Account" : "Login"}
        </button>

        {currentState === 'Sign-Up' && (
          <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

        <p>
          {currentState === 'Sign-Up' ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setCurrentState('Log-In')}>Login here</span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span onClick={() => setCurrentState('Sign-Up')}>Click here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
