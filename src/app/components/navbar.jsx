"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { CircleUserRound } from 'lucide-react'

const Navbar = () => {
    const [profile,setProfile] = useState(false)
  return (
    <nav className='fixed bg-white/30 backdrop-blur-none shadow-xl py-5 px-14 flex gap-40 items-center rounded-2xl'>
        <div>
            <h1 className='font-extrabold text-xl'>KODAI GANESH CALL TAXI</h1>
        </div>
        {/* routes */}
        <div>
            <ul className='flex justify-center items-center gap-10 font-bold'>
                <li className=''>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/pages/booking">Services & Booking</Link>
                </li>
                <li>
                    <Link href="">Contact Us</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
            </ul>
        </div>
        {/*button*/}
        <div>
            {profile?
            <Link href="/pages/profile">
                <CircleUserRound className='w-9 h-9'/>
            </Link>:
            <div id="btns" className='flex items-center justify-center gap-5'>
                <div className='bg-black text-gray-300 w-fit py-2 px-8 rounded-lg font-bold ' id="btn">
                <Link href="/pages/signip">Sign In</Link>
                </div>
                <div className='bg-black text-gray-300 w-fit py-2 px-8 rounded-lg font-bold ' id="btn">
                <Link href="/pages/signup">Sign Up</Link>
                </div>
            </div>
                        
            }
        </div>

    </nav>
  )
}

export default Navbar