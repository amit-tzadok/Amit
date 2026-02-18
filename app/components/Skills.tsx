import { Code2, Globe, Zap, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    icon: Code2,
    title: 'Programming Languages',
    technologies: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'ML & Data Science',
    technologies: ['NumPy', 'Pandas', 'scikit-learn', 'PyTorch'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    technologies: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Tools & Platforms',
    technologies: ['Git', 'GitHub', 'Jupyter', 'Linux', 'VS Code'],
    color: 'from-green-500 to-emerald-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6 relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-xl opacity-30"></div>
            <div className="relative px-6 py-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-full border border-purple-500/30">
              <Sparkles className="w-5 h-5 text-purple-300 inline mr-2" />
              <span className="text-purple-200 font-medium">Tech Stack</span>
            </div>
          </motion.div>

          <motion.h2
            className="mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Skills &amp;{' '}
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
            transition={{ delay: 0.3 }}
          >
            A solid foundation in AI/ML and software development, built through coursework, research, and hands-on projects
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="relative p-8 bg-gradient-to-br from-slate-900/70 to-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Hover color wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-2xl`} />

                  {/* Icon + title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{skill.title}</h3>
                  </div>

                  {/* Technology chips */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/60 hover:border-slate-500/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* External glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-15 -z-10 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
