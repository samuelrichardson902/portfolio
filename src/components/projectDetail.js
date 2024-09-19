import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projectData from '../projectData.json'
import '../styles/projectDetails.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectData.find((project) => project.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getYoutubeEmbedUrl = (youtubeUrl) => {
    if (!youtubeUrl) return null
    const videoId = youtubeUrl.split('/').pop()
    return `https://www.youtube.com/embed/${videoId}`
  }

  const handleHomeClick = (event, sectionId) => {
    event.preventDefault()
    navigate('/', { state: { scrollTo: sectionId } })
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Oops! Project Not Found</h1>
        <p>Looks like you've ventured into uncharted territory!</p>
        <p>This project doesn't exist... yet. But who knows? It might be my next big idea!</p>
        <a href="/" onClick={(e) => handleHomeClick(e, '#hero')} className="project-link">
          Take me back to safety
        </a>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="media-container">
          <img src={project.imgSrc} alt={project.title} className={project.youtubeUrl ? 'with-video' : 'full-width'} />
          {project.youtubeUrl && (
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={getYoutubeEmbedUrl(project.youtubeUrl)}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div className="project-content">
        <div className="content-wrapper">
          <div className="description">
            <p>{project.description}</p>
          </div>
          {project.technologies && (
            <div className="project-technology">
              <h2>Technology Used</h2>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {project.link === null ? (
          <div>
            <div className="project-in-progress">
              <span className="in-progress-icon">🚧</span>
              <p>This project is currently in progress. Stay tuned for updates!</p>
            </div>
            <a href="/" onClick={(e) => handleHomeClick(e, '#hero')} className="home-icon">
              <img src="/home.svg" alt="Home" />
            </a>
          </div>
        ) : (
          <div className="project-link-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
            <a href="/" onClick={(e) => handleHomeClick(e, '#hero')} className="home-icon">
              <img src="/home.svg" alt="Home" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
