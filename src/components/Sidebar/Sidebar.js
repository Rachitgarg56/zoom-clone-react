import React from 'react'
import { sidebarItems } from '../../assets/constants'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <aside className="sidebar fixed h-full px-6 hidden sm:block w-24 lg:w-72 pt-6" style={{backgroundColor:'#1c1f2e'}}>

      <ul className='flex flex-col gap-4' style={{color:"#c9ddff"}}>

        {
          sidebarItems.map((tab) => {
            return (
              <NavLink to={tab.path}>
                <li className='flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white' key={tab.id} >
                  <figure className='w-6 h-6 flex items-center justify-center'>{tab.image}</figure>
                  <p className='hidden font-bold text-lg lg:block'>{tab.name}</p>
                </li>
              </NavLink>
            )
          })
        }

      </ul>

    </aside>
  )

}

export default Sidebar
