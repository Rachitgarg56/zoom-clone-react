import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/yoom-logo.svg'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 pr-8 py-3' style={{backgroundColor:'#1c1f2e'}}>
      <figure className='logo w-28 h-10'><Logo className='w-full h-full'/></figure>
      <div className='user bg-white rounded-full p-2'>
        {/* <button className=''>use</button> */}
        <SignedOut>
          <SignInButton  />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
