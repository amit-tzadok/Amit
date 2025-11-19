import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNode, FaDatabase, 
  FaGitAlt, FaGithub, FaLinux, FaTerminal
} from 'react-icons/fa'
import { SiTypescript, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiJupyter } from 'react-icons/si'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaJava />, name: 'Java' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaDatabase />, name: 'SQL' }
      ]
    },
    {
      category: 'ML & Data Science',
      skills: [
        { icon: <SiNumpy />, name: 'NumPy' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiScikitlearn />, name: 'scikit-learn' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNode />, name: 'Node.js' },
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <SiJupyter />, name: 'Jupyter' },
        { icon: <FaLinux />, name: 'Linux' }
      ]
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="about-intro">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={import.meta.env.BASE_URL + 'assets/images/profile.png'} alt="Amit - Profile" />
            </motion.div>

            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3>Hello! I'm Amit</h3>
              <p>
                I recently graduated from the University at Buffalo in May 2025 with a B.S. in Computer Science 
                and a minor in Mathematics. I'm passionate about AI and machine learning, with a strong foundation 
                in problem-solving and algorithm design.
              </p>
              <p>
                I love building innovative solutions that leverage cutting-edge technologies. Currently seeking 
                opportunities to apply my skills in software development, machine learning, and data-driven 
                problem solving to create meaningful impact.
              </p>
            </motion.div>
          </div>

          <div className="about-details">
            <motion.div 
              className="skills"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4>Skills & Technologies</h4>
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="skill-category">
                  <h5 className="category-title">{category.category}</h5>
                  <div className="skills-grid">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="skill-icon">{skill.icon}</div>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="interests"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h4>Interests</h4>
              <p>
                Outside of computer science, I love diving into creative hobbies such as music, drawing, painting, crafting, and photography. I am also always excited to try new foods, explore new places, and learn new languages.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
