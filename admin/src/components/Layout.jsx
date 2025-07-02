import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { useState } from 'react'

export const Layout = ({ children }) => {
  const [sidebar,setsidebar]=useState(false)
  return (
    <>
    <Nav sidebar={sidebar} setsidebar={setsidebar}></Nav>
   <Sidebar sidebar={sidebar} setsidebar={setsidebar}></Sidebar>
   <div className='ml-[16%]'>
     { children }
   </div>
     

      
    </>
   

  
  )
}
