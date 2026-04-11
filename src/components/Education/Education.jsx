import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, BookOpen } from 'lucide-react'
import './Education.css'

const coursework = [
  'Data Structures & Algorithms',
  'Machine Learning',
  'Artificial Intelligence',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Database Systems',
  'Linear Algebra',
  'Probability & Statistics',
  'Computer Vision',
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <motion.div
          ref={ref}
          className="education-card"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="education-header">
            <div className="education-icon">
              <GraduationCap size={40} />
            </div>

            <div className="education-info">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25, delay: 0.1 }}
              >
                <h3>University at Buffalo</h3>
                <p className="education-school">State University of New York</p>
              </motion.div>

              <motion.div
                className="education-degree"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.25, delay: 0.15 }}
              >
                <span className="degree-badge">B.S. Computer Science</span>
                <span className="minor-badge">Minor in Mathematics</span>
              </motion.div>
            </div>

            <motion.div
              className="education-date"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.25, delay: 0.2 }}
            >
              <Calendar size={16} />
              <span>Aug 2021 – May 2025</span>
            </motion.div>
          </div>

          <motion.div
            className="education-coursework"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            <div className="coursework-header">
              <BookOpen size={18} />
              <h4>Relevant Coursework</h4>
            </div>
            <div className="coursework-tags">
              {coursework.map((course, idx) => (
                <motion.span
                  key={course}
                  className="course-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.15, delay: 0.3 + idx * 0.02 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
