import React from 'react'
import Navbar from "@/app/components/navbar"

const Home = () => {
  return (
    <div id='main' className='bg-gray-400 h-full w-full'>
    <div id="navbar" className='bg-[url(/download.jpeg)] bg-no-repeat bg-cover p-10 h-screen '>
    <Navbar/>
    </div>
    <div className='w-full h-screen bg-green-500'></div>
    </div>
  )
}

export default Home