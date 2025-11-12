import { useState, useEffect } from 'react'
import './FloatingFlowers.css'

const FloatingFlowers = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        // Show flakes only when hero section is visible
        setIsHomeVisible(rect.bottom > 0 && rect.top < window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // Reduced size range
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15, // Faster animations
    left: Math.random() * 100,
    animationType: i % 3 // vary animation types for more natural movement
  }))

  if (!isHomeVisible) return null

  return (
    <div className="floating-flowers">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle flake-${particle.animationType}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingFlowers
