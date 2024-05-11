import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className="parent-container h-screen flex flex-col" style={{backgroundColor:'#161925'}}>
      <Navbar/>
      <div className="flex flex-1 mt-16">
        <Sidebar/>
        <div className='h-full left-0 top-0 px-6 hidden sm:block w-24 lg:w-72 pt-8' style={{backgroundColor:'red'}}></div>
        <main className='w-full h-full px-6 sm:px-14' style={{color:'white', backgroundColor:'#161925'}}>
            <Outlet className='text-white'/>
        </main>
      </div>
    </div>
  )
}

export default Layout
