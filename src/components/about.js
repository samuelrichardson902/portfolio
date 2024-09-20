import React from 'react'
import '../styles/about.css'

const About = () => {
  // Define the skills array
  const skills = [
    { name: 'JavaScript', file: 'js' },
    { name: 'React', file: 'react' },
    { name: 'Node.js', file: 'nodejs' },
    { name: 'Python', file: 'python' },
    { name: 'Supabase', file: 'supabase' },
    { name: 'MongoDB', file: 'mongodb' },
    { name: 'Java', file: 'java' },
    { name: 'C', file: 'c' },
    { name: 'HTML', file: 'html' },
  ]

  // Group the skills for display in sets of 3
  const groupedSkills = []
  const columns = 3
  for (let i = 0; i < skills.length; i += columns) {
    groupedSkills.push(skills.slice(i, i + columns))
  }

  return (
    <section id="about" className="container py-5">
      <h2 className="heading-effect">About Me</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="about-me-text">
            <p>
              Hi, i'm currently a second-year Computer Science student at Loughborough University, pursuing a BSc. My focus areas include
              software development, robotics, AI, and machine learning. In sixth form, I studied Further Maths, Computer Science,
              Engineering, and Maths.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="skill-cards">
            {/* Render the grouped skills */}
            {groupedSkills.map((group, index) => (
              <div key={index} className="skill-group">
                {group.map((skill) => (
                  <div key={skill.file} className="skill-card">
                    <img src={`${process.env.PUBLIC_URL}/logos/${skill.file}.png`} alt={`${skill.name} logo`} className="skill-logo" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
