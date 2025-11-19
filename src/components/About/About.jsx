import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'Databases' },
    { icon: <FaGitAlt />, name: 'Git' }
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
          <div className="about-image">
            <img src={import.meta.env.BASE_URL + 'assets/images/profile.png'} alt="Amit - Profile" />
          </div>

          <div className="about-text">
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

            <div className="skills">
              <h4>Skills & Technologies</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="interests">
              <h4>Interests</h4>
              <p>
                Outside of computer science, I love music, art (drawing, painting, and crafting), working out,
                trying new foods, traveling, and learning new languages.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
