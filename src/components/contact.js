import React from 'react'
import ContactForm from './contactForm'
import '../styles/contact.css'

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="heading-effect">Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <div className="contact-info">
          <div className="contact-item">
            <ContactForm />
          </div>

          <div className="contact-links">
            <a href="https://github.com/samuelrichardson902" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/samrichardson902/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@samrichardson7188" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
