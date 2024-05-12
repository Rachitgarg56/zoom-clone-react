import React from 'react'
import './Sidebar.css'
import SideBarTabs from './SideBarTabs'

const Sidebar = () => {

  return (
    <aside className="sidebar fixed h-full px-6 hidden sm:block w-24 lg:w-72 pt-6" style={{backgroundColor:'#1c1f2e'}}>

      <SideBarTabs/>

    </aside>
  )

}

export default Sidebar
