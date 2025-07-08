import {Routes,Route} from 'react-router-dom'
import Nav from "./components/Navbar/Nav"
import { useState } from 'react'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import  PaymentVerify  from './pages/PaymentVerify/PaymentVerify'
import Myorders from './pages/Myorders/Myorders'

const App = () => {
  const [login,setLogin]=useState(false);
  return <>

  {login===true?<Login setLogin={setLogin}/>:<></>}
    <div className="app">
    
      <Nav setLogin={setLogin}/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
           <Route path='/verify' element={<PaymentVerify/>}/>
               <Route path='/myorders' element={<Myorders/>}/>
      </Routes> 
    </div>
    <Footer/>
    </>
}

export default App
