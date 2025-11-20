import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import img1 from '../images/IMG_1308.JPG?url'
import img2 from '../images/IMG_1311.JPG?url'
import img3 from '../images/IMG_1314.JPG?url'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
        duration: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              Joel Chipoya Kalimbwe
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Software Engineer • Cloud Computing • Data Scientist • Graphic Designer
            </motion.p>
            <motion.p className="hero-description" variants={itemVariants}>
              Crafting innovative solutions at the intersection of technology and creativity
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-images"
            variants={itemVariants}
          >
            <div className="image-grid">
              <motion.div 
                className="image-card card-1"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
                <div className="image-overlay"></div>
              </motion.div>
              <motion.div 
                className="image-card card-2"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
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
                <div className="image-overlay"></div>
              </motion.div>
              <motion.div 
                className="image-card card-3"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={img3} 
                  alt="Joel Chipoya"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #000000 0%, #2a2a2a 100%)'
                  }}
                />
                <div className="image-overlay"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <HiArrowDown size={24} />
        </motion.div>
      </motion.div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero

