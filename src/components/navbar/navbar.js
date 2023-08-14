import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
import Image2 from "../../ImageNav.jpg"

function Navbar() {
  return (
    <div className="main-navbar shadow mt-0">
      <div>
        <div className="up-div pt-5 px-10 relative" >
          <NavLink to='/'>
            <img src={Image2} className='logo' />
          </NavLink>
          <div className='navbar-phone hover:rounded-3xl'>
            <a className='phone text-black-700 text-xl font-mono' href='tel:+994-12-111-11-11'>
              <p className='phone-number'>
                +994(12)111-11-11
              </p>
            </a>
          </div>
        </div>
      </div>
      <hr className=''></hr>
      <div className='px-10 tabs'>
        <NavLink className={({ isActive }) =>
          isActive ? 'underline underline-offset-8 text-red-700 font-bold ' : 'hover:underline underline-offset-8 hover:text-red-700'} to='/'>Ana Səhifə</NavLink>
        <NavLink to='/about' className={({ isActive }) =>
          isActive ? 'underline underline-offset-8 text-red-700 font-bold ' : 'hover:underline underline-offset-8 hover:text-red-700'}>Haqqımızda</NavLink>
        <a className='hover:underline underline-offset-8 hover:text-red-700'>Servislər</a>
        <a className='hover:underline underline-offset-8 hover:text-red-700'>Portofilo</a>
        <NavLink to="/blog" className={({ isActive }) =>
          isActive ? 'underline underline-offset-8 text-red-700 font-bold ' : 'hover:underline underline-offset-8 hover:text-red-700'}>Bloglar</NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? 'underline underline-offset-8 text-red-700 font-bold ' : 'hover:underline underline-offset-8 hover:text-red-700'}>Əlaqə</NavLink>
      </div>
    </div >
  )
}

export default Navbar