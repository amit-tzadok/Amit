import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Coffee, Heart, Zap, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: Award, value: 'B.S. CS', label: 'University at Buffalo', color: 'from-blue-400 to-cyan-500' },
    { icon: Zap, value: 'AI / ML', label: 'Specialization', color: 'from-violet-500 to-purple-600' },
    { icon: Coffee, value: '2025', label: 'Class of', color: 'from-amber-500 to-orange-500' },
    { icon: Heart, value: 'Math', label: 'Minor', color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
          }}
          animate={{
            clipPath: [
              'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              'polygon(10% 0, 100% 10%, 90% 100%, 0 90%)',
              'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20" />
              <div className="relative px-6 py-3 bg-white border-2 border-purple-200 rounded-full">
                <Sparkles className="w-5 h-5 text-purple-600 inline mr-2" />
                <span className="text-purple-600 font-medium">About Me</span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              CS Graduate &amp;{' '}
            </span>
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI / ML Enthusiast
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="space-y-8">
              <div>
                
                
                <p className="mb-4 text-slate-600 leading-relaxed text-lg">
                  I graduated in May 2025 with a B.S. in Computer Science and a minor in Mathematics. 
                  I'm passionate about AI and machine learning, with a strong foundation in problem-solving 
                  and algorithm design.
                </p>
                
                <p className="mb-6 text-slate-600 leading-relaxed text-lg">
                  I love building innovative solutions that leverage cutting-edge technologies. Currently seeking 
                  opportunities to apply my skills in software development, machine learning, and data-driven 
                  problem solving to create meaningful impact.
                </p>
              </div>

              {/* <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React', 'Node.js', 'HTML5', 'CSS3', 'NumPy', 'Pandas', 'scikit-learn', 'PyTorch', 'Git', 'GitHub', 'Jupyter', 'Linux'].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-sm text-slate-700 font-medium border border-purple-100"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div> */}

              <motion.div
                className="relative p-6 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
                <div className="relative z-10 flex items-center gap-4 text-white">
                  <Heart className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-lg">Interests</div>
                    <div className="text-white/80">Music, drawing, painting, crafting, photography—and always excited to try new foods, explore new places, and learn new languages.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Main image */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback 
                  src={`${import.meta.env.BASE_URL}assets/images/profile.png`}
                  alt="Amit - Profile"
                  className="w-full h-[400px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 to-purple-600/15 mix-blend-overlay"></div> */}
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/25 to-purple-500/25 rounded-3xl -z-10 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -z-10 blur-2xl" />

            
            </div>
          </motion.div>
        </div>

        {/* Stats grid with creative layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative p-8 bg-white rounded-3xl border-2 border-slate-100 hover:border-transparent transition-all overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="text-5xl font-black mb-3 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent relative z-10"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-slate-600 font-medium relative z-10">{stat.label}</div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}