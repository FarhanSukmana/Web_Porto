import React from 'react'
import SkilsItem from './SkilsItem'
import html from '../assets/skils/html.png'
import css from '../assets/skils/css.png'
import figma from '../assets/skils/figma.png'
import javascript from '../assets/skils/javascript.png'
import python from '../assets/skils/python.png'
import react from '../assets/skils/react.png'
import vue from '../assets/skils/vue.png'
import vite from '../assets/skils/vite.png'
import tailwind from '../assets/skils/tailwinds.png'
import github from '../assets/skils/github.png'

const Content = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:p-20 p-4 py-16 flex flex-col items-center'>
      {/* ABOUT */}
      <div>
        <h1 className='flex justify-center text-3xl text-blue-800 dark:text-teal-600'>About </h1>
      </div>
      <div>
        <p className='text-center text-lg p-8 leading-7 text-gray-900 dark:text-gray-300'>
        I am a passionate undergraduate informatics student at Universitas Pembangunan Nasional Veteran Jakarta, 
        specializing in front-end web development. With a strong foundation in web technologies, I am enthusiastic 
        about crafting visually appealing and user-friendly interfaces. I am open to new opportunities for internships or fresh job opportunities to 
        apply and enhance my skills in creating engaging and responsive user interfaces. Through my academic journey, I aim to contribute 
        to the ever-evolving field of front-end web development.</p>
     </div>
    

    {/* Skills */}
    <div className='py-12'>
      <h1 className='flex justify-center text-3xl text-blue-800 w-full dark:text-teal-600'>Skills</h1>
      <div className='grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-8'>
        <SkilsItem img={html} />
        <SkilsItem img={css} />
        <SkilsItem img={javascript} />
        <SkilsItem img={react} />
        <SkilsItem img={vue} />
        <SkilsItem img={vite} />
        <SkilsItem img={tailwind} />
        <SkilsItem img={python} />
        <SkilsItem img={figma} />
        <SkilsItem img={github} />
      </div>
    </div>
</div>
  )
}

export default Content