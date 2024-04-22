import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className="parent-container h-screen flex flex-col" style={{backgroundColor:'#161925'}}>
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar/>
        <main className='w-full h-full' style={{color:'white'}}>
            <Outlet className='text-white'/>
        </main>
      </div>
    </div>
  )
}

export default Layout
