import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Business Performance & Decision Analytics',
    desc: 'Built a 1M+ record Business Analytics solution using Power BI, SQL, MySQL, DAX, Power Query, and n8n. Identified a $54.65M profitability gap and added Alerts, RCA, and automated data validation.',
    ss: '/Project1Logo.png',
    tech: ["Power BI",
    "SQL",
    "MySQL",
    "DAX",
    "Power Query",
    "n8n",
    "Automation"],
    live: 'https://app.powerbi.com/view?r=eyJrIjoiZTBjYTJiZmEtODg4NS00Y2Q5LTgxODgtMjZmYjhjZjVjMjA0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
    code: 'https://github.com/00AbhiChaunhan00/Business-Performance-Decision-Analytics',
    video: "https://lnkd.in/p/g39KAq7E"
  },
  {
  title: 'Customer Behavior & Revenue Analytics',
  desc: 'Built a customer analytics solution using Power BI, SQL, MySQL, DAX, and RFM Analysis to analyze customer value, retention, churn, and revenue concentration. Identified that the top 20% of customers contribute ~45.5% of revenue and highlighted high-value At-Risk customers for retention prioritization.',
  ss: '/Project2Logo.png',
  tech: ["Power BI",
    "SQL",
    "MySQL",
    "DAX",
    "Power Query",
    "RFM Analysis"],
  live: 'https://app.powerbi.com/view?r=eyJrIjoiZjQzOTkzNTMtZGJhNS00MzljLTg2NTItOGI0NmM2MzY0NGRlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9',
  code: 'https://github.com/00AbhiChaunhan00/Customer-Behavior-Revenue-Analytics',
  video: "YOUR_LINKEDIN_VIDEO_PRESENTATION_LINK"
},
  {
  title: '🚕 NYC Taxi Revenue & Payment Behavior Analysis',
  desc: 'End-to-end data analytics project analyzing 2.79M+ NYC taxi trips using Python, SQL, and MySQL. Includes data cleaning, exploratory data analysis, revenue analysis, payment behavior, and statistical hypothesis testing to compare Credit Card and Cash fares.',
  ss: '/Project4Logo.png',
  tech: ['Python', 'SQL', 'MySQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Hypothesis Testing'],
  live: '',
  code: 'https://github.com/00AbhiChaunhan00/NYC-Taxi-Revenue-Payment-Behavior-Analysis'
},
  {
    title: '📊 ProfileX – Data Profiler',
    desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and visualization.',
    ss: '/ProfileX.png',
    tech: ['Streamlit', 'Pandas', 'Plotly'],
    live: 'https://profilex.streamlit.app/',
    code: 'https://github.com/kunjdesai/ProfileX'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
