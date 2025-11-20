import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import img1 from '../images/IMG_1308.JPG?url'
import img2 from '../images/IMG_1311.JPG?url'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-images" variants={itemVariants}>
            <motion.div 
              className="about-image-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src={img1} 
                alt="Joel Chipoya"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
                }}
              />
            </motion.div>
            <motion.div 
              className="about-image-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <img 
                src={img2} 
                alt="Joel Chipoya"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)'
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="about-info" variants={itemVariants}>
            <motion.h3 
              className="about-name"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Joel Chipoya Kalimbwe
            </motion.h3>
            <motion.p 
              className="about-role"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Software Engineer, Cloud Computing, Data Scientist & Graphic Designer
            </motion.p>

            <div className="about-details">
              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaGraduationCap className="detail-icon" />
                <div>
                  <span className="detail-label">Qualification</span>
                  <span className="detail-value">Bachelor of Computer Science</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaGraduationCap className="detail-icon" />
                <div>
                  <span className="detail-label">Major</span>
                  <span className="detail-value">Software Engineering</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaGraduationCap className="detail-icon" />
                <div>
                  <span className="detail-label">University</span>
                  <span className="detail-value">Namibia University of Science and Technology</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaCalendarAlt className="detail-icon" />
                <div>
                  <span className="detail-label">Date of Birth</span>
                  <span className="detail-value">23/09/2001</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaMapMarkerAlt className="detail-icon" />
                <div>
                  <span className="detail-label">Address</span>
                  <span className="detail-value">Windhoek, Namibia</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaPhone className="detail-icon" />
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">0812320168</span>
                </div>
              </motion.div>

              <motion.div 
                className="detail-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaEnvelope className="detail-icon" />
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">joelkalimbwe3@gmail.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

