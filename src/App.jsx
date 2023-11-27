import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Content from './component/Content'
import Sidenav from './component/Sidenav'
import Project from './component/Project'
import Contact from './component/Contact'

const App = () => {
  const [darkMode, setDarkMode] =useState(true)

  const toggleDarkMode=()=>{
    setDarkMode((prevDarkMode) => !prevDarkMode )
    
  }
  return (
    <div className={`${darkMode ?"dark" : ""} transition-all duration-200 ease-in ${darkMode ? 'bg-gray-900': 'bg-white'} `}>
      <Sidenav toggleDarkMode={toggleDarkMode} />
      <Profile/>
      <Content/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App