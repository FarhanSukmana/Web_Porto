import React from 'react'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import Content from './component/Content'
import Sidenav from './component/Sidenav'
import Project from './component/Project'

const App = () => {
  return (
    <div className='font-Lora'>
      <Sidenav />
      {/* <Navbar/> */}
      <Profile/>
      <Content/>
      <Project/>
    </div>
  )
}

export default App