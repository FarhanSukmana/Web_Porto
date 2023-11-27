import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import { FiGlobe } from "react-icons/fi"



const ProjectItem = ({img, title, link, demo}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-l from-blue-400
    dark:shadow-gray-600 dark:from-gray-500'>
        <img src={img} alt="" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bol text-gray-900 tracking-wider text-center dark:text-gray-300'>{title}</h3>
            <div className='flex justify-between'>
            <a href={link} target='_blank'><AiFillGithub size={30} className='dark:text-gray-300'/></a>
            <a href={demo} target='_blank'><FiGlobe size={30} className='dark:text-gray-300'/></a>

            </div>
        </div>
    </div>
  )
}

export default ProjectItem