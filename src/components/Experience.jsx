import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import deblogo from '../images/deblogo.png?url'
import lotslogo from '../images/lotslogo.png?url'
import ijglogo from '../images/ijglogo.png?url'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'DEBMARINE',
      position: 'Internship',
      year: '2023-2024',
      projectTitle: 'Computer Vision Software',
      description: 'Building Diamond detection software that automatically detects and count diamonds and also provide reports to end users with the help of Data science. We also built a Mining tool monitory called Umbilical cord detection for maintaining and monitoring mining tools.',
      website: 'https://debmarine.com',
      logo: deblogo,
      logoBg: '#1a1a1a'
    },
    {
      company: 'LOTS',
      position: 'Software Engineer (Consultant)',
      year: '2024',
      projectTitle: 'Client Projects',
      description: 'Building clients projects for LOTS',
      website: 'https://lotsinsights.com/',
      logo: lotslogo,
      logoBg: '#000000'
    },
    {
      company: 'IJG Namibia',
      position: 'Software Engineer and Graphic Designer (Consultant)',
      year: '2024-2025',
      projectTitle: 'Money Market System',
      description: 'I played a role in both front and back end building an Internal financial system for IJG Namibia.',
      website: 'https://ijg.net',
      logo: ijglogo,
      logoBg: '#ffffff'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={cardVariants}>
          Experience
        </motion.h2>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="company-logo-container"
                style={{ backgroundColor: exp.logoBg }}
              >
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="company-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div style="color: white; font-size: 2rem; font-weight: bold;">${exp.company}</div>`
                  }}
                />
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <div className="experience-meta">
                  <span className="position">{exp.position}</span>
                  <span className="year">
                    <FaCalendarAlt /> {exp.year}
                  </span>
                </div>

                <h4 className="project-title">{exp.projectTitle}</h4>
                <p className="project-description">{exp.description}</p>
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="visit-website-link"
                >
                  Visit the company website <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

