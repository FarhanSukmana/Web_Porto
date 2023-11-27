import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson, BsMoonStarsFill} from 'react-icons/bs'

const Sidenav = ({toggleDarkMode}) => {
    const [nav, setNav]=useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between p-10 mb-8  '>
        <div id='main' className='flex justify-between  mb-12 text-3xl text-blue-800 dark:text-teal-400'>
          <h1>PORTOFOLIO</h1>
        </div>

        <AiOutlineMenu onClick={handleNav} size={25}
        className='absolute right-4 z-[99] md:hidden dark:text-white'/>
        {nav ? (
            <div className='fixed top-0 left-0 w-full h-full bg-white/90 flex flex-col justify-center items-center z-20 md:hidde
            dark:bg-gray-900'>
                <a onClick={handleNav} 
                href="#main" 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-300
                dark:bg-gray-600 dark:text-white'>
                <AiOutlineHome size={20}/>
                <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} 
                href="#about" 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-300
                dark:bg-gray-600 dark:text-white'>
                <BsPerson size={20}/>
                <span className='pl-4'>About</span>
                </a>
                <a onClick={handleNav} 
                href="#project" 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-300
                dark:bg-gray-600 dark:text-white'>
                <GrProjects size={20}/>
                <span className='pl-4'>Project</span>
                </a>
                <a onClick={handleNav} 
                href="#contact" 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-300
                dark:bg-gray-600 dark:text-white'>
                <AiOutlineMail size={20}/>
                <span className='pl-4'>Contact</span>
                </a>
                <a onClick={() => {
                    toggleDarkMode();
                    setNav(!nav);
                    }} 
                className='w-fit flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easa-in duration-300
                dark:bg-gray-600 dark:text-gray-300'>
                <BsMoonStarsFill size={20}/>
                </a>
            </div>
        ):(
           ''
            )    
        }

        <div className='md:block hidden left-1 fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href="#main" 
                className='rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-600
                dark:bg-gray-600 dark:shadow-gray-100 dark:shadow-md dark:text-gray-300'>
                    <AiOutlineHome size={25}/>
                </a>
                <a href="#about" 
                className='rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-600
                dark:bg-gray-600 dark:shadow-gray-100 dark:shadow-md dark:text-gray-300'>
                    <BsPerson size={25}/>
                </a>
                <a href="#project" 
                className='rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-600
                dark:bg-gray-600 dark:shadow-gray-100 dark:shadow-md dark:text-gray-300'>
                    <GrProjects size={25}/>
                </a>
                <a href="#contact" 
                className='rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-600
                dark:bg-gray-600 dark:shadow-gray-100 dark:shadow-md dark:text-gray-300'>
                    <AiOutlineMail size={25}/>
                </a>
                <a onClick={toggleDarkMode} 
                className='rounded-full shadow-lg bg-gray-100  shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-blue-600
                dark:bg-gray-600 dark:shadow-gray-100 dark:shadow-md dark:text-gray-300'>
                    <BsMoonStarsFill size={25}/>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Sidenav