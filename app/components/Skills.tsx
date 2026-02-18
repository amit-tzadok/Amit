import { Code2, Palette, Database, Smartphone, Globe, Zap, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500',
    progress: 95
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'from-purple-500 to-pink-500',
    progress: 90
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, Responsive Design',
    color: 'from-orange-500 to-red-500',
    progress: 88
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, PWAs, Mobile-First',
    color: 'from-green-500 to-emerald-500',
    progress: 85
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    description: 'REST APIs, GraphQL, WebSockets',
    color: 'from-indigo-500 to-blue-500',
    progress: 92
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, SEO, Accessibility',
    color: 'from-yellow-500 to-orange-500',
    progress: 87
  }
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated background grid with perspective */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(99, 102, 241, 0.1) 50px, rgba(99, 102, 241, 0.1) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(168, 85, 247, 0.1) 50px, rgba(168, 85, 247, 0.1) 51px)
            `,
          }}
          animate={{
            transform: ['rotateX(60deg) translateY(0px)', 'rotateX(60deg) translateY(50px)'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? 'rgba(99, 102, 241, 0.1)' : 
              i % 3 === 1 ? 'rgba(168, 85, 247, 0.1)' : 
              'rgba(236, 72, 153, 0.1)'
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6 relative"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative px-6 py-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30">
              <Layers className="w-5 h-5 text-purple-300 inline mr-2" />
              <span className="text-purple-200 font-medium">Tech Stack</span>
            </div>
          </motion.div>

          <motion.h2 
            className="mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Skills &{' '}
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A powerful arsenal of modern technologies and frameworks, refined through years of hands-on experience
          </motion.p>
        </motion.div>

        {/* Hexagonal grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring"
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden"
                  whileHover={{ 
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl`}
                  />
                  
                  {/* Animated corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-10 blur-2xl`}
                    animate={isActive ? {
                      scale: [1, 1.5, 1],
                      rotate: [0, 90, 0]
                    } : {}}
                    transition={{ duration: 2 }}
                  />

                  {/* Icon with 3D effect */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ 
                      rotateY: 180,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-2xl relative`}>
                      <Icon className="w-10 h-10 text-white" />
                      
                      {/* Icon glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-50`}
                        animate={{
                          scale: isActive ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-white text-xl relative z-10">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 relative z-10">
                    {skill.description}
                  </p>

                  {/* Skill progress bar */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-500">Proficiency</span>
                      <motion.span
                        className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                      >
                        {skill.progress}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Particle effects on hover */}
                  {isActive && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          initial={{ scale: 0, x: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: Math.cos((i * Math.PI * 2) / 8) * 100,
                            y: Math.sin((i * Math.PI * 2) / 8) * 100,
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* External glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 -z-10 transition-opacity`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-medium relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="relative z-10">Always learning new technologies</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
