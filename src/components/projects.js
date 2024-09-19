import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import '../styles/projects.css'
import projectData from '../projectData.json'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const projectsSectionRef = useRef(null)

  useEffect(() => {
    setProjects(projectData)
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (projectsSectionRef.current) {
        const scrollPosition = window.scrollY
        const horizontalSpeed = 0.2
        const verticalSpeed = 0.05

        projectsSectionRef.current.style.backgroundPosition = `${scrollPosition * horizontalSpeed}px ${scrollPosition * verticalSpeed}px`
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="projects" className="projects-section py-5" ref={projectsSectionRef}>
      <h2 className="heading-effect">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <Link to={`/project/${project.id}`}>
                <img src={project.imgSrc} alt={project.title} className="project-image" />
              </Link>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
