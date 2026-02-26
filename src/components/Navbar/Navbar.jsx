import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)

          const sections = ['home', 'about', 'education', 'projects', 'contact']
          const current = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })
          if (current) setActiveSection(current)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (section) => {
    setIsOpen(false)
    setActiveSection(section)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <a href="#home">Amit Tzadok</a>
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => handleNavClick('education')}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="hamburger" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
