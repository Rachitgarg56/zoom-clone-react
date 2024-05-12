import React, { useContext } from "react";
import { sidebarItems } from '../../assets/constants'
import { NavLink } from 'react-router-dom'
import { ZoomContext } from '../../App'

const SideBarTabs = () => {

    const {isSideDialog,setIsSideDialog} = useContext(ZoomContext)

    return (
        <ul className={`${isSideDialog && 'max-w-64'} flex flex-col gap-4`} style={{color:"#c9ddff"}}>

        {
          sidebarItems.map((tab) => {
            return (
              <NavLink to={tab.path}>
                <li onClick={()=>setIsSideDialog(false)} className='flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white' key={tab.id} >
                  <figure className='w-6 h-6 flex items-center justify-center'>{tab.image}</figure>
                  <p className={`${isSideDialog ? 'block' : 'hidden'} font-bold text-lg lg:block`}>{tab.name}</p>
                </li>
              </NavLink>
            )
          })
        }

      </ul>
    )
}

export default SideBarTabs;