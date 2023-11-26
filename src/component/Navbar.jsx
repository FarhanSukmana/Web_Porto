import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between p-10 mb-12 text-3xl font-Merriweather'>
        <h1 className=''>PORTOFOLIO</h1>
        <p className='cursor-pointer text-2xl'> <BsMoonStarsFill /> </p>
    </div>
  )
}

export default Navbar