import React, { useContext } from 'react'
import {ReactComponent as Logo} from '../../assets/icons/yoom-logo.svg'
import { UserButton } from '@clerk/clerk-react'
import hamburgerIcon from '../../assets/icons/hamburger.svg'
import { ZoomContext } from '../../App'

const Navbar = () => {

  const {isSideDialog,setIsSideDialog} = useContext(ZoomContext)

  return (
    <nav className={`${isSideDialog && 'pointer-events-none bg-black opacity-20'} flex z-10 fixed w-full items-center justify-between px-8 pr-8 py-3`} style={{backgroundColor:'#1c1f2e'}}>
      <figure className='logo w-28 h-10'><Logo className='w-full h-full'/></figure>
      <div className='flex gap-4 items-center'>
        <UserButton/>
        <img className='sm:hidden w-8' src={hamburgerIcon} alt='menu-more' onClick={()=>setIsSideDialog((prev)=>!prev)} />
      </div>
    </nav>
  )
}

export default Navbar
