"use client"
import React, { use } from 'react'
import Link from 'next/link'
import { IoIosMenu } from 'react-icons/io'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    console.log(isMenuOpen)
  return (
    <nav className='w-full bg-white/40 fixed p-4'>
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="text-white text-2xl font-bold">LOGO</div>
            
            {/* list menu */}
            <ul className='hidden md:flex space-x-4'>
                <li className='text-white'><Link href="/">Home</Link></li>
                <li className='text-white'><Link href="/pages/booking">Services & Booking</Link></li>
                <li className='text-white'><Link href="/pages/contactus">Contact Us</Link></li>
                <li className='text-white'><Link href="/pages/about">About</Link></li>
            </ul>
            <div className='flex items-center gap-5'>
                {/*Sign In*/}
                <button className='text-black bg-white px-6 py-2 rounded-lg'>
                    <Link href='/pages/signin'>Sign In</Link>
                </button>

                {/*toggle button*/}
                <button onClick={toggleMenu} className="md:hidden text-white text-4xl focus:outline  focus:outline-gray-400 rounded-md">
                    <IoIosMenu/>
                </button>
            </div>
            
        </div>
        {/*moblie menu*/}
        {isMenuOpen?(
                <ul className='flex-col md:hidden'>
                <li className='text-white py-2'><Link href="/">Home</Link></li>
                <li className='text-white py-2'><Link href="/pages/booking">Services & Booking</Link></li>
                <li className='text-white py-2'><Link href="/pages/contactus">Contact Us</Link></li>
                <li className='text-white py-2'><Link href="/pages/about">About</Link></li>
            </ul>
            ):null}
    </nav>
  )
}

export default Navbar