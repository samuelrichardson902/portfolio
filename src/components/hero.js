import React, { useEffect, useRef, useState } from 'react'
import '../styles/hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const [showArrows, setShowArrows] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`
      }
      setShowArrows(scrolled === 0)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="bg-light text-center py-5 position-relative" ref={heroRef}>
      <div className="container">
        <h1 className="display-4">Sam Richardson</h1>
        <p className="lead">Full-Stack Developer</p>
      </div>
      {showArrows && (
        <div className="scroll-arrows">
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
        </div>
      )}
    </section>
  )
}

export default Hero
