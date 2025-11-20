import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import moseslogo from '../images/mosesmedialog.png?url'
import titalogo from '../images/titalogo.png?url'
import touclogo from '../images/touclogo.jpg?url'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Moses Media House',
      description: 'I build a website for Moses media House',
      url: 'https://www.mosesmediahouse.com',
      logo: moseslogo,
      logoBg: '#2a2a2a',
      logoBorder: '#ffffff'
    },
    {
      name: 'Titanium Clearing',
      description: 'I built a website titaniumclearing company.',
      url: 'https://www.titaniumclearing.africa',
      logo: titalogo,
      logoBg: '#f5f5f5',
      logoBorder: '#ffffff'
    },
    {
      name: 'Lui Heavenly Touch Spa',
      description: 'I build a luiheavenlytouchspa webite',
      url: 'https://www.luiheavenlytouchspa.com',
      logo: touclogo,
      logoBg: '#2a2a2a',
      logoBorder: '#ffffff'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={cardVariants}>
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="project-logo-container"
                style={{ 
                  backgroundColor: project.logoBg,
                  borderColor: project.logoBorder 
                }}
              >
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="project-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div style="color: ${project.logoBg === '#000000' ? 'white' : 'black'}; font-size: 1.5rem; font-weight: bold;">${project.name}</div>`
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Website <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

