import React from 'react'
import Logo from '../components/navbarLayout/Logo'
import Nav from '../components/navbarLayout/Nav'

const Navbar = () => {
  return (
    <div className=" bg-white sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-500">
      <Logo />
      <Nav />
    </div>
  )
}

export default Navbar
