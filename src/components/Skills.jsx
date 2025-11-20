import { motion } from 'framer-motion'
import { 
  SiReact, SiFlutter, SiJavascript, SiHtml5, SiCss3,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiDocker,
  SiMysql, SiPostgresql, SiNginx, SiGithub,
  SiFigma
} from 'react-icons/si'
import { 
  FaCloud, FaNetworkWired, FaCode, FaServer, 
  FaDatabase, FaPalette, FaPaintBrush, FaChartLine,
  FaBrain, FaEye, FaProjectDiagram, FaLayerGroup
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: FaCode, color: '#ED8B00' },
        { name: 'Spring Boot', icon: FaServer, color: '#6DB33F' },
        { name: 'Spring Security', icon: FaServer, color: '#6DB33F' },
        { name: 'Microservices', icon: FaNetworkWired, color: '#6DB33F' },
        { name: 'REST APIs', icon: FaNetworkWired, color: '#2563eb' },
        { name: 'C#', icon: FaCode, color: '#239120' },
        { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
      ]
    },
    {
      title: 'Cloud Computing',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, color: '#232F3E' },
        { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Oracle Cloud', icon: FaCloud, color: '#F80000' },
        { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
        { name: 'Hetzner', icon: FaCloud, color: '#D50C2D' }
      ]
    },
    {
      title: 'Networking & DevOps',
      skills: [
        { name: 'Cloudflared', icon: FaNetworkWired, color: '#F38020' },
        { name: 'Nginx', icon: SiNginx, color: '#009639' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' }
      ]
    },
    {
      title: 'Graphic Design',
      skills: [
        { name: 'Adobe Creative Suite', icon: FaPalette, color: '#FF0000' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Canva', icon: FaPaintBrush, color: '#00C4CC' },
        { name: 'UI/UX Design', icon: SiFigma, color: '#F24E1E' },
        { name: 'Logo Design', icon: FaPaintBrush, color: '#FF0000' },
        { name: 'Brand Identity', icon: FaPalette, color: '#FF0000' }
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Data Science', icon: FaChartLine, color: '#2563eb' },
        { name: 'Machine Learning', icon: FaBrain, color: '#2563eb' },
        { name: 'Computer Vision', icon: FaEye, color: '#2563eb' },
        { name: 'API Development', icon: FaNetworkWired, color: '#2563eb' },
        { name: 'Database Design', icon: SiMysql, color: '#4479A1' },
        { name: 'System Architecture', icon: FaProjectDiagram, color: '#2563eb' },
        { name: 'Agile Methodology', icon: FaLayerGroup, color: '#2563eb' },
        { name: 'Version Control', icon: SiGithub, color: '#181717' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title" variants={categoryVariants}>
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={categoryVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        <IconComponent size={28} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

