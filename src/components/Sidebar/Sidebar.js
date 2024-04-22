import React from 'react'
import { sidebarItems } from '../../assets/constants'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

  return (
    <aside className="sidebar h-full p-2 w-56 pt-8" style={{backgroundColor:'#1c1f2e'}}>

      <ul className='flex flex-col gap-1' style={{color:"#c9ddff"}}>

        {
          sidebarItems.map((tab) => {
            return (
              <NavLink to={tab.path}>
                <li className='flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white' key={tab.id} >
                  <figure className='w-6 h-6 flex items-center justify-center'>{tab.image}</figure>
                  <p>{tab.name}</p>
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
