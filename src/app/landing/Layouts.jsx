import React from 'react'
import Hero from './Hero'
 import About from './About'
import Levels from './Levels'
import Blogs from './Blogs'
import Program from './Program'
import Footer from './Footer'
import Cta from './Cta'
import Faqs from './Faqs'

function Layouts() {
  return (
 <div className="container mx-auto max-w-7xl space-y-20">
    <Hero/>
    <About/>
    <Program/>
    <Levels/>
    <Blogs/>
    <Faqs/>
    <Cta/>
<Footer/>
</div>
  )
}

export default Layouts
