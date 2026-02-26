import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FloatingFlowers from './components/FloatingFlowers/FloatingFlowers'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="App">
      <FloatingFlowers />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
