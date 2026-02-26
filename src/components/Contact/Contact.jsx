import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, submitting: true, error: false })

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, error: false })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setFormStatus({ submitted: false, submitting: false, error: false })
        }, 5000)
      } else {
        setFormStatus({ submitted: false, submitting: false, error: true })
      }
    } catch {
      setFormStatus({ submitted: false, submitting: false, error: true })
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">Have a project in mind? Let's work together!</p>

        <motion.div
          ref={ref}
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:amit.tzadok@gmail.com">amit.tzadok@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/amit-tzadok/" target="_blank" rel="noopener noreferrer">amit-tzadok</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/amit-tzadok" target="_blank" rel="noopener noreferrer">amit-tzadok</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Mount Kisco, New York, USA</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {formStatus.error && (
              <div className="form-error">
                Failed to send message. Please try again.
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={formStatus.submitting}>
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
