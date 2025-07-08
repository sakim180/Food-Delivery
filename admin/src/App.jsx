import { Route,Routes } from "react-router-dom"
import Order from "./page/Order"

import { Layout } from "./components/Layout"
import AddProduct from "./page/AddProduct"
import ListProduct from "./page/ListProduct"
import Home from "./components/Home"

function App() {


  return (
    <>
    <Layout className='bg-amber-300'>
    <Routes>
       <Route path="/" element={<Home></Home>}/>
    <Route path="/order" element={<Order></Order>}/>
    <Route path="/add" element={<AddProduct></AddProduct>}/>
    <Route path="/list" element={<ListProduct></ListProduct>}/>

      
    </Routes>
    </Layout>
     
    
     
    </>
  )
}

export default App
