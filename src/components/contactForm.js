// ContactForm.js
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import '../styles/contactForm.css'

const ContactForm = () => {
  // This variable controls whether EmailJS is used or bypassed
  const useEmailJS = true // Set to false to bypass EmailJS and simulate success

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({}) // To track form errors
  const [successMessage, setSuccessMessage] = useState('') // New state for success message
  const [showToast, setShowToast] = useState(false) // State for showing/hiding toast

  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Function to validate the form fields
  const validateForm = () => {
    let formErrors = {}
    let valid = true

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required'
      valid = false
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required'
      valid = false
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email'
      valid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required'
      valid = false
    }

    setErrors(formErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check for form validation before sending
    if (!validateForm()) {
      return
    }

    setSuccessMessage('') // Clear any previous success message

    if (useEmailJS) {
      // Send the email using EmailJS
      emailjs
        .send(
          'service_b6cm6hl', // Replace with your EmailJS Service ID
          'template_bveeby8', // Replace with your EmailJS Template ID
          formData,
          'ncdNc2KANUf6sBlNt' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text)
            showToastNotification('Message sent successfully!')
            setFormData({ name: '', email: '', message: '' }) // Reset form fields
          },
          (error) => {
            console.error('Failed to send email...', error)
            setErrors({ submit: 'Failed to send the message, please try again.' })
          }
        )
    } else {
      // Simulate successful submission without EmailJS (bypass mode)
      showToastNotification('Message sent successfully! (bypass)')
      setFormData({ name: '', email: '', message: '' }) // Reset form fields
    }

    setErrors({})
  }

  // Function to handle showing toast notification
  const showToastNotification = (message) => {
    setSuccessMessage(message)
    setShowToast(true) // Show the toast

    // Hide the toast after 1.5 seconds
    setTimeout(() => {
      setShowToast(false) // Hide the toast
    }, 1500)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </label>

        <button type="submit">Send</button>

        {errors.submit && <p className="error-message">{errors.submit}</p>}
      </form>

      {/* Toast Notification */}
      {showToast && <div className="toast-notification">{successMessage}</div>}
    </>
  )
}

export default ContactForm
