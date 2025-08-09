import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'

import Topheader from './Elements/Topheader'
import Navbar from './Elements/Navbar'
import Hero from './Elements/Hero'
import Marquee from './Elements/Marquee'
import Cover from './Elements/Cover'
import About from './Elements/About'
import Mentors from './Elements/Mentors'
import Agriculture from './Elements/Agriculture'
import Footer from './Elements/Footer'
import Award from './Elements/Award'
import Adminlogin from './components/Adminlogin'
import Home from './components/HOme'
import Dashboard from './Admin/Dashboard'
import News from './Admin/News'

function App() {
  

  return (
    <>
      <div className="container-fluid">
          <BrowserRouter>
          <Navbar />
          <Routes>
             <Route path='/home' element={<Home />} />
            <Route path='/admin' element={<Adminlogin />} />
            <Route path='/admindash' element={<Dashboard />} />
                        <Route path='/adminnews' element={<News />} />


            
          </Routes>
             {/* <Topheader />
             
             <Hero />
             <Marquee />
             <Cover />
             <About />
             <Mentors />
             <Agriculture />
             <Award />
             <Footer /> */}
  

          </BrowserRouter>


      </div>
    </>
  )
}

export default App
