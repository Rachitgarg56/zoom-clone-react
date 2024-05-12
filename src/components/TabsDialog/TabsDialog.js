import React, { useContext } from 'react'
import {ReactComponent as Logo} from '../../assets/icons/yoom-logo.svg'
import SideBarTabs from '../Sidebar/SideBarTabs'
import CloseIcon from '@mui/icons-material/Close';
import { ZoomContext } from '../../App'

const TabsDialog = () => {

  const {setIsSideDialog} = useContext(ZoomContext)

  return (
    <div className='absolute w-3/4 top-0 left-0 z-50 bg-[#1c1f2e] flex flex-col p-6 gap-16 h-full'>
      <figure className='logo w-28 h-10'><Logo className='w-full h-full'/></figure>
      <SideBarTabs/>
      <button onClick={()=>setIsSideDialog(false)} className='absolute right-4 top-4 text-gray-400 cursor-pointer'>
        <CloseIcon/>
      </button>
    </div>
  )
}

export default TabsDialog
