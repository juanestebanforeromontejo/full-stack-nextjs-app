import React from 'react'
import NavLinks from './NavLinks'

const NavBar = () => {
  return (
    <div>
      <div className="bg-gray-900 flex flex-row items-center justify-center p-5">
        <NavBar/>
        <NavLinks/>
      </div>
    </div>
  )
}

export default NavBar
