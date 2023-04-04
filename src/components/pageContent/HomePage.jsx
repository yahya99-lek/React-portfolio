import React from 'react'
import About from '../home/about/About'
import Branding from '../home/Branding'

import Home from '../home/homes/Home'
import Service from '../home/service/Services/Service'
import Skill from '../home/Skill'
import Blog from '../home/work/blog/Blog'
import Work from '../home/work/Work'
import Wrapper from '../home/Wrapper'
import WrapperOne from '../home/WrapperOne'

const HomePage = () => {
  return (
    <>
        <Home />
        <Branding />
        <About />
        <Service />
        <Wrapper />
        <Skill />
        <WrapperOne />
        <Work />
        <Blog />
        
    </>
  )
}

export default HomePage