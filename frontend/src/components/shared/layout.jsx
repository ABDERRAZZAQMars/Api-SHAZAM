import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'



function layout() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        
        <div className="bg-gray-200 h-screen"><Outlet/></div>
    </div>
  )
}

export default layout