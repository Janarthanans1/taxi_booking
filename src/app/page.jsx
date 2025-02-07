import React from 'react'
import Navbar from "@/app/components/navbar"

const Home = () => {
  return (
    <div id='main' className='h-full w-full'>
      <header id="navbar" className='bg-[url(/download.jpeg)] bg-no-repeat bg-cover w-full h-screen'>
        <Navbar/>
      </header>
      <div className='w-full h-screen bg-green-500'></div>
    </div>
  )
}

export default Home