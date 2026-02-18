import { ExternalLink, Github, Star, ArrowUpRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with cart management, payment integration, and real-time inventory tracking.',
    image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzEzMDIxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHByb2plY3R8ZW58MXx8fHwxNzcxMjk2NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with detailed forecasts, interactive maps, and location tracking.',
    image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxMzM1ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'API Integration', 'Charts', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
    color: 'from-orange-500 to-red-500'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px'
      }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Featured badge */}
        {project.featured && (
          <motion.div
            className="absolute top-6 right-6 z-30 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center gap-2 shadow-xl"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Star className="w-4 h-4 fill-white text-white" />
            <span className="text-white text-sm font-semibold">Featured</span>
          </motion.div>
        )}

        {/* Image section */}
        <div className={`relative overflow-hidden ${project.featured ? 'h-[500px]' : 'h-80'}`}>
          <motion.div
            className="absolute inset-0"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`}
            animate={{ opacity: isHovered ? 0.3 : 0.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated particles */}
          {isHovered && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -50],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}

          {/* Action buttons */}
          <motion.div
            className="absolute top-6 left-6 flex gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group/btn"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-slate-900 group-hover/btn:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group/btn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-slate-900 group-hover/btn:scale-110 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Bottom content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h3
              className="text-white mb-3 text-2xl"
              style={{ transform: 'translateZ(20px)' }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-slate-300 mb-6 line-clamp-2"
              style={{ transform: 'translateZ(15px)' }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* Tags section */}
        <div className="p-6 bg-slate-900/80 backdrop-blur-xl border-t border-slate-800">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className={`px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-full text-sm font-medium border backdrop-blur-sm`}
                style={{
                  borderColor: `rgba(${tagIndex * 50}, ${100 + tagIndex * 30}, ${200 - tagIndex * 20}, 0.2)`,
                  color: '#e2e8f0',
                  transform: 'translateZ(10px)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: tagIndex * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View project link */}
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group/link"
            whileHover={{ x: 5 }}
          >
            <span className="font-medium">View Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
          animate={isHovered ? { translateX: '200%' } : { translateX: '-100%' }}
          transition={{ duration: 0.8 }}
        />

        {/* External glow */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity`}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={`w-full h-full ${i % 2 === 0 ? 'bg-blue-200/20' : 'bg-purple-200/20'} ${i % 3 === 0 ? 'rounded-full' : 'rounded-3xl'} blur-3xl`}></div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6 relative"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative px-6 py-3 bg-white border-2 border-purple-200 rounded-full shadow-xl">
              <Sparkles className="w-5 h-5 text-purple-600 inline mr-2" />
              <span className="text-purple-600 font-medium">Portfolio</span>
            </div>
          </motion.div>

          <motion.h2
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Innovative solutions and creative implementations across various domains, 
            showcasing the intersection of design and technology
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded-full font-medium shadow-2xl relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Projects</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}