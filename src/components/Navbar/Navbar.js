import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/yoom-logo.svg'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 pr-8 py-3' style={{backgroundColor:'#1c1f2e'}}>
      <figure className='logo w-28 h-10'><Logo className='w-full h-full'/></figure>
      <UserButton/>
    </nav>
  )
}

export default Navbar
