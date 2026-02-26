import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython, SiJavascript, SiTypescript, SiReact,
  SiHtml5, SiCss3, SiGit, SiFirebase,
  SiTensorflow, SiPandas, SiScikitlearn, SiCplusplus
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import './About.css'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ]
  },
  {
    title: 'Web & Tools',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'scikit-learn', icon: <SiScikitlearn /> },
    ]
  }
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
              ref={skillsRef}
              className="skills"
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4>Skills</h4>
              {skillCategories.map((category, catIdx) => (
                <div className="skill-category" key={category.title}>
                  <p className="category-title">{category.title}</p>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        className="skill-item"
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 + catIdx * 0.1 + skillIdx * 0.05 }}
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
