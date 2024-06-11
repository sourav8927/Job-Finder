import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleIsMenuToggler=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 fixed top-0 w-full z-10 hover:shadow-md navbar backdrop-blur-md bg-opacity-75'>
      <nav className='flex justify-between items-center py-6 '>
        {/* <img src="\public\images\jij_logo.webp" className='size-[50px]' alt="" /> */}
      <a href="/" className='flex items-center text-2xl'>JOB PORTAL</a>
        <ul className='hidden md:flex gap-12'>
          <NavLink to="/" ><li>Start a search</li></NavLink>
          <NavLink to="/current-jobs"><li>Current Jobs</li></NavLink>
          <NavLink to="/salary-estimate"><li>Salary Estimate</li></NavLink>
          <NavLink to="/post-job"><li>Post job</li></NavLink>
        </ul>

        <div className='text-base font-medium space-x-5 hidden lg:block'>
            <Link to="/" className='py-2 px-5 border rounded'>Log in</Link>
            <Link to="/" className='py-2 px-5 border rounded text-white bg-blue-500'>Sign up</Link>
        </div>

      {/*for mobile view*/}
        <div className='md:hidden block'>
          <button onClick={handleIsMenuToggler}>
            { isMenuOpen? <RxCross2 className='w-5 h-5'/> : <FaBarsStaggered className='w-5 h-5 '/>}
          </button>
        </div>
      </nav>

    {/*navitems for mobile*/}
    <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen?"":"hidden"} `}>
      <ul className='text-white first:text-white py-1'>
      <NavLink to="/" ><li className='py-1'>Home</li></NavLink>
          <NavLink to="/current-jobs"><li className='py-1'>Current Jobs</li></NavLink>
          <NavLink to="/salary-estimate"><li className='py-1'>Salary Estimate</li></NavLink>
          <NavLink to="/post-job"><li>Post job</li></NavLink>
        <div className='flex py-4 gap-2'>
          <li><Link to="/" className='py-2 px-5 border rounded'>Log in</Link></li>
          <li><Link to="/" className='py-2 px-5 border rounded bg-blue-400'>Sign up</Link></li>
        </div>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
