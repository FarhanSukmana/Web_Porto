import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import foto from "../assets/foto_nobg.png"

const Profile = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='max-w-[800px] mx-auto px-4 md:w-full md:flex md:flex-col md:items-center md:p-8'>
            <h2 className='text-5xl pb-4 text-teal-600'>Muhammad Farhan Sukmana</h2>
            <h3 className='text-2xl py-2 text-center'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Front-end Web Enthusiast',
                  1000,
                  'UI/UX Enthusiast',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h3>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96 '>
            <img src={foto} alt="" className='object-cover cover-image rounded-full'/>
        </div>
        <div className='text-4xl flex gap-12 justify-center text-gray-600'>
          <a href="https://github.com/FarhanSukmana" target='_blank'>
            <AiFillGithub/>
          </a>
          <a href="https://www.instagram.com/sukmanafarhan/?next=%2F" target='_blank'>
            <AiFillInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/mfarhansukmana/" target='_blank'>
           <AiFillLinkedin/>
          </a>
        </div>
    </div>
  )
}

export default Profile