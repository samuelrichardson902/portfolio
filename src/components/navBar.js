import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let prevScrollPos = window.pageYOffset
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (prevScrollPos > currentScrollPos) {
          navbar.style.top = '0'
          navbar.classList.remove('hidden')
        } else {
          navbar.style.top = `-${navbar.offsetHeight}px`
          navbar.classList.add('hidden')
        }
        prevScrollPos = currentScrollPos
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo)
      }, 100)
    }
  }, [location])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-autohide">
      <div className="container-fluid">
        <div
          className="brand-container d-inline-block align-text-top me-3"
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <img src="favicon_white.svg" alt="Brand Logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          Sam Richardson
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, '#hero')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
