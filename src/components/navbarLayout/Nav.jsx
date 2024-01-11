import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const NavLinks = () => {
  return (
    <>
      <NavLink>Services</NavLink>
      <NavLink>Products</NavLink>
      <NavLink>Billings</NavLink>
      <NavLink>Contact Us</NavLink>
      
    </>
  )
}


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return (
    <>
      <nav className="flex w-2/3 lg:w-[50%] justify-end items-center  py-2 pr-4 md:pr-10">
    <div className="hidden w-full md:flex justify-between items-center text-text font-font">
        <NavLinks />
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center ml-8 text-[#e5e7eb]">Get Started</button>
    </div>
    

    <div className="md:hidden flex items-center ml-4">
        <button onClick={toggleNavbar}> {isOpen ? <X /> : <Menu />}</button>
    </div>
</nav>


      {
          isOpen && (
              <div className="flex flex-col basis-full items-center text-lg text-white font-font pt-16 bg-primary h-screen sticky top-0 z-[20] px-0 py-0 space-y-12 ">
                  <NavLinks />
                  <NavLink><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button></NavLink>
              </div>
          )
      }
    </>
    )
  }

export default Nav
