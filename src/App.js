// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import ProjectDetail from './components/projectDetail'

import './App.css' // Import global styles

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects /> {/* Project list or overview */}
      <Contact />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      {/* Navbar remains consistent across all pages */}
      <Navbar />

      <Routes>
        {/* Main page route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic project detail route */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App
