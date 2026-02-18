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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">
      {/* Dynamic gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
        }}
      />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-full h-full ${i % 3 === 0 ? 'bg-blue-500/10' : i % 3 === 1 ? 'bg-purple-500/10' : 'bg-pink-500/10'} ${i % 2 === 0 ? 'rounded-full' : 'rounded-3xl rotate-45'} blur-2xl`}></div>
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
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: (i * windowSize.width) / 20, 
              y: (i * windowSize.height) / 20 
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.4)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(99, 102, 241, 0.4)",
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-50"></div>
            <div className="relative px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400 inline mr-2" />
              <span className="text-sm text-white">Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Animated text with letter-by-letter reveal */}
          <motion.h1 className="mb-8 text-7xl md:text-9xl leading-none">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/20 mb-2"
            >
              Hello, I'm
            </motion.div>
            <motion.div
              className="relative inline-block"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black">
                Amit Tzadok
              </span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.h1>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2"
          >
            {["CS", "Graduate", "&", "AI", "Enthusiast"].map((word, i) => (
              <motion.span
                key={i}
                className={`inline-block mx-3 text-2xl md:text-4xl ${
                  word === "&" ? "text-purple-400" : "text-slate-400"
                }`}
                whileHover={{
                  scale: 1.2,
                  color: "#a78bfa",
                  rotate: Math.random() * 10 - 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          Recent graduate from the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">University at Buffalo</span>{" "}passionate about{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI</span>{" "}and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">machine learning</span>, seeking opportunities to create meaningful impact
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
            className="group relative px-10 py-5 rounded-full overflow-hidden"
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
            href="#projects"
            className="px-10 py-5 rounded-full border-2 border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Work</span>
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
                whileHover={{ y: -8, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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