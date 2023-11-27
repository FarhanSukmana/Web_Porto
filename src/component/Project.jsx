import React from 'react'
import movieflix from '../assets/Movieflix.png'
import musichub from '../assets/Musichub.png'
import porto from '../assets/web_porto.png'
import lapis from '../assets/Lapis.png'
import catalog from '../assets/Catalog.png'
import ProjectItem from './ProjectItem'


const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='flex justify-center text-3xl text-blue-800 dark:text-teal-600'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12 mt-8'>
            <ProjectItem img={movieflix} title='MovieFlix' link='https://github.com/FarhanSukmana/MovieFlix' demo='https://movie-flix-mfs.vercel.app/' />
            <ProjectItem img={porto} title='Web Portofolio' link='https://github.com/FarhanSukmana/Web_Porto' demo='https://farhansukmana-porto.vercel.app/' />
            <ProjectItem img={musichub} title='MusicHub' link='https://github.com/FarhanSukmana/MusicHub' demo='https://music-hub-mfs.vercel.app/' />
            <ProjectItem img={lapis} title='Lapis Pahlawan' link='https://github.com/FarhanSukmana/lapis_pahlawan' demo='https://lapispahlawan-mfs.vercel.app/' />
            <ProjectItem img={catalog} title='E-Catalog' link='https://github.com/FarhanSukmana/Catalog' demo='https://catalog-mfs.vercel.app/' />
        </div>
    </div>
  )
}

export default Project