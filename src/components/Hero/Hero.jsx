import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm "
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowName(true)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            {displayText}
            {showName && <span className="highlight">Amit</span>}
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Computer Science Graduate | AI & Machine Learning Enthusiast
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Recent graduate from the University at Buffalo seeking opportunities to solve complex problems 
            through innovative software solutions.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={import.meta.env.BASE_URL + 'assets/images/resume.pdf'} download className="btn btn-secondary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <a
              href="https://github.com/amit-tzadok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-tzadok/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:amit.tzadok@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero
