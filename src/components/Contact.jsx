import { motion } from 'framer-motion'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGlobe 
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'joelkalimbwe3@gmail.com',
      link: 'mailto:joelkalimbwe3@gmail.com',
      color: '#EA4335'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '0812320168',
      link: 'tel:+264812320168',
      color: '#34A853'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Windhoek, Namibia',
      link: null,
      color: '#FBBC05'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
        </motion.h2>

        <motion.p 
          className="contact-subtitle"
          variants={itemVariants}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>

        <div className="contact-grid">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            const content = (
              <motion.div
                key={index}
                className="contact-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="contact-icon-wrapper"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <IconComponent 
                    className="contact-icon"
                    style={{ color: info.color }}
                  />
                </div>
                <h3 className="contact-label">{info.label}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="contact-value"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="contact-value">{info.value}</p>
                )}
              </motion.div>
            )

            return info.link ? (
              <a 
                key={index}
                href={info.link}
                style={{ textDecoration: 'none', color: 'inherit' }}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                {content}
              </a>
            ) : (
              content
            )
          })}
        </div>

        <motion.div 
          className="contact-footer"
          variants={itemVariants}
        >
          <p className="footer-text">
            Let's create something amazing together!
          </p>
          <motion.a
            href="https://owellgraphics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGlobe /> Visit owellgraphics.com
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="contact-background">
        <div className="contact-orb orb-1"></div>
        <div className="contact-orb orb-2"></div>
      </div>
    </section>
  )
}

export default Contact

