import {Routes,Route} from 'react-router-dom'
import Nav from "./components/Navbar/Nav"
import { useState } from 'react'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App = () => {
  const [login,setLogin]=useState(false);
  return <>

  {login===true?<Login/>:<></>}
    <div className="app">
    
      <Nav setLogin={setLogin}/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes> 
    </div>
    <Footer/>
    </>
}

export default App
