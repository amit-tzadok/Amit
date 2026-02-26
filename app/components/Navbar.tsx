import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Amit{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tzadok
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a
          href={`${import.meta.env.BASE_URL}assets/images/resume.pdf`}
          download
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          Resume ↓
        </a>
      </div>
    </motion.nav>
  );
}
