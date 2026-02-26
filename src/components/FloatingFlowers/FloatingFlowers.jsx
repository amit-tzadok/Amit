import { useState, useEffect, useMemo } from 'react'
import './FloatingFlowers.css'

const FloatingFlowers = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const heroSection = document.getElementById('home')
          if (heroSection) {
            const rect = heroSection.getBoundingClientRect()
            setIsHomeVisible(rect.bottom > 0 && rect.top < window.innerHeight)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const particles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    left: Math.random() * 100,
    animationType: i % 3
  })), [])

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
