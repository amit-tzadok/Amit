import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Palette, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 pt-20">
      {/* Dynamic gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
        }}
      />

      {/* Subtle background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { w: 400, h: 400, left: '10%', top: '20%', color: 'bg-blue-500/5' },
          { w: 350, h: 350, left: '70%', top: '60%', color: 'bg-purple-500/5' },
          { w: 300, h: 300, left: '50%', top: '10%', color: 'bg-pink-500/5' },
          { w: 450, h: 450, left: '20%', top: '70%', color: 'bg-indigo-500/5' },
        ].map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{ width: blob.w, height: blob.h, left: blob.left, top: blob.top }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={`w-full h-full ${blob.color} rounded-full`}></div>
          </motion.div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 relative">
            <div className="relative px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400 inline mr-2" />
              <span className="text-sm text-white">Open to Opportunities</span>
            </div>
          </div>

          <motion.h1 className="mb-6 leading-none">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-white/50 text-xl md:text-2xl font-light tracking-widest uppercase mb-3"
            >
              Hello, I'm
            </motion.div>
            <motion.div
              className="relative inline-block"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black text-6xl md:text-8xl">
                Amit Tzadok
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-20"></div>
            </motion.div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-slate-400 text-xl md:text-2xl font-light tracking-wide mb-2"
          >
            B.S. Computer Science &nbsp;&middot;&nbsp; AI &amp; Machine Learning
          </motion.p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Recent graduate from the University at Buffalo passionate about AI and machine learning,
          seeking opportunities to create meaningful impact through software and data-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <motion.a
            href={`${import.meta.env.BASE_URL}assets/images/resume.pdf`}
            download
            className="group relative px-8 py-4 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <span className="relative z-10 text-white font-medium">Download Resume</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 justify-center"
        >
          {[
            { icon: Github, href: 'https://github.com/amit-tzadok', label: 'GitHub', color: 'from-slate-500 to-slate-700' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/amit-tzadok/', label: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
            { icon: Mail, href: 'mailto:amit.tzadok@gmail.com', label: 'Email', color: 'from-purple-500 to-pink-500' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group overflow-hidden"
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-5 h-5 relative z-10" />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                ></motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}