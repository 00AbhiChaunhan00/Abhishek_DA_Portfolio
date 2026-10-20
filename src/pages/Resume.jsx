
import React from "react";
import { motion } from "framer-motion";
import "../CSS/Resume.css";

import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'

const resumeId = "1-xiU2PYMWQYRQdSQ-qTEhs6r9_msJWSf";
const resumeView = `https://drive.google.com/file/d/${resumeId}/preview`;
const resumeDownload = `https://drive.google.com/uc?export=download&id=${resumeId}`;

const experience = [
  {
    role: "Data Analyst Intern",
    company: "AtliQ Technologies",
    date: "08/2026 – 09/2026",
    location: "",
    tools: "SQL, MySQL, Power BI, Excel, Data Modeling, Power Query",
    bullets: [
      "Executed data cleaning and reporting tasks while working on practical analytics assignments.",
      "Contributed to a client Social Media Analytics project, analyzing YouTube and Instagram datasets.",
      "Produced structured analytical outputs from cleaned data to support reporting and project analysis.",
    ],
  },
  {
    role: "MIS & Reporting Associate",
    company: "Vinod Electronics Store",
    date: "02/2026 – 08/2026",
    location: "Etah, Uttar Pradesh",
    tools: "Excel, Power Query, Power Pivot, Pivot Tables",
    bullets: [
      "Maintained daily sales, billing, expense, and transaction records using Excel, ensuring accurate and organized business data.",
      "Compiled monthly sales and expense reports to track business performance and operational costs.",
      "Organized customer, inventory, and transaction data into structured Excel records to support daily reporting and operational decisions.",
    ],
  },
];

const projects = [
  {
    title: "Business Performance & Decision Analytics",
    tools: "Power BI · SQL · MySQL · DAX · Power Query · n8n",
    bullets: [
      "Built an 8-page Power BI decision-support solution on 1M+ records, integrating Finance, Sales, Customer/Product, Supply Chain, Executive, Alerts and RCA views.",
      "Analyzed $823.85M sales (+207.4% YoY) generating -$54.65M Net Profit, tracing loss drivers from region to product using root-cause analysis.",
      "Automated CSV-to-MySQL ingestion with n8n, adding data validation, approval controls and profitability, forecast and inventory exception monitoring.",
    ],
    github:
      "https://github.com/00AbhiChaunhan00/Business-Performance-Decision-Analytics",
    live: "https://app.powerbi.com/view?r=eyJrIjoiZTBjYTJiZmEtODg4NS00Y2Q5LTgxODgtMjZmYjhjZjVjMjA0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    video: "https://lnkd.in/p/g39KAq7E",
  },
  {
    title: "Customer Behavior & Revenue Analytics",
    tools: "Power BI · MySQL · SQL · DAX · RFM Analysis",
    bullets: [
      "Developed a 4-page Power BI customer analytics dashboard to track revenue, customer value, retention, churn and behavioral drivers.",
      "Segmented customers into five RFM groups, identifying approximately 45.5% revenue contribution from the top 20% of customers and ₹133.6M At-Risk revenue.",
      "Completed eight SQL business analyses across revenue concentration, retention, churn, purchase frequency and customer drivers.",
    ],
    github:
      "https://github.com/00AbhiChaunhan00/Customer-Behavior-Revenue-Analytics",
    live: "https://app.powerbi.com/view?r=eyJrIjoiZjQzOTkzNTMtZGJhNS00MzljLTg2NTItOGI0NmM2MzY0NGRlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    video: "your_kinof_link",
  },
  {
    title: "Sales & Financial Performance Analytics",
    tools: "Excel · Power Query · Pivot Tables · Power Pivot",
    bullets: [
      "Prepared four-year sales and financial reports to analyze customer performance, market sales versus targets, and profit and loss across fiscal years.",
      "Designed interactive Excel reports with Pivot Tables, Power Pivot and DAX to track KPIs and identify performance gaps.",
    ],
    github:
      "https://github.com/00AbhiChaunhan00/Excel-Sales-Analytics-Report",
  },
  {
    title: "NYC Taxi Revenue & Payment Behavior Analysis",
    tools: "Python · MySQL · Pandas · NumPy · Statistical Analysis",
    bullets: [
      "Analyzed 2.7M+ NYC taxi trips to identify payment, fare, distance, passenger and revenue patterns.",
      "Completed six SQL business analyses and Welch's t-test, identifying a $0.19 average fare difference between cash and credit-card trips.",
    ],
    github:
      "https://github.com/00AbhiChaunhan00/NYC-Taxi-Revenue-Payment-Behavior-Analysis",
  },
];

const skills = [
  {
    name: "Excel",
    detail:
      "Pivot Tables, Charts, XLOOKUP, VLOOKUP, Power Pivot, Power Query, Data Cleaning",
  },
  {
    name: "SQL",
    detail:
      "Joins, Aggregations, Subqueries, CTEs, Window Functions, Data Extraction",
  },
  {
    name: "Power BI",
    detail:
      "Dashboard Development, Data Modeling, DAX, Power Query, ETL, KPI Reporting",
  },
  {
    name: "Business Reporting",
    detail:
      "MIS Reporting, Sales Reporting, Expense Reporting, Inventory Reporting",
  },
  {
    name: "Python",
    detail:
      "Pandas, NumPy, Data Cleaning, Data Analysis, Visualization, Data Integration",
  },
  {
    name: "Workflow Automation",
    detail:
      "n8n, AI-Assisted Workflows, Data Validation, Reporting Automation",
  },
  {
    name: "Databases & Data Engineering",
    detail: "MySQL, PostgreSQL, AWS, Databricks, dbt, Data Modeling",
  },
  {
    name: "Statistics & Tools",
    detail:
      "Hypothesis Testing, Matplotlib, Jupyter Notebook, Git, GitHub, VS Code",
  },
];

const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/00AbhiChaunhan00' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/00abhichauhan00/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:00abhichauhann00@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+917217645866' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/004bhichauhan00/' }
  ]

const certifications = [
  {
    title: "Data Analytics Bootcamp",
    org: "Codebasics",
    link: "https://codebasics.io/certificate/CB-BT-1-733458",
  },
  {
    title: "SQL Intermediate",
    org: "HackerRank",
    link: "https://www.hackerrank.com/certificates/b491e8c2dc7a?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
  {
    title: "Power BI Data Analytics",
    org: "Codebasics",
    link: "https://codebasics.io/certificate/CB-49-733458",
  },
];

function SectionHeading({ children }) {
  return <h2 className="ar-section-title">{children}</h2>;
}

function ExternalLink({ href, children }) {
  if (!href || href === "your_kinof_link") return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} ↗
    </a>
  );
}

export default function Resume() {
  return (
    <section className="ar-page">
      <motion.div
        className="ar-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="ar-header">
          <div>
            <h1 className="ar-title">
              <span aria-hidden="true">▤</span> Resume
            </h1>
            <p className="ar-subtitle">
              A quick glance at my journey.
            </p>
          </div>

          <a
            className="ar-download"
            href={resumeDownload}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">↓</span> Download Resume
          </a>
        </header>

        <div className="ar-profile">
          <div className="ar-profile-info">
            <h2>Abhishek Singh Chauhan</h2>
            <p className="ar-role">
              Data Analytics &amp; Business Reporting
            </p>
            <p className="ar-muted">New Delhi, India</p>

            <p className="ar-contact">
              <a href="mailto:00abhichauhann00@gmail.com">
                00abhichauhann00@gmail.com
              </a>
              <a href="tel:+917217645866">+91 7217645866</a>
              <a
                href="https://www.linkedin.com/in/00abhichauhan00/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </p>
          </div>

          <div className="ar-summary">
            <strong>Professional Summary</strong>
            <p>
              Data Analytics and Business Reporting professional with
              hands-on experience in Advanced Excel, SQL, Power BI, Python,
              DAX, Power Query and Power Pivot. Experienced in data cleaning,
              dashboard development, KPI reporting, business analysis and
              workflow automation through practical analytics projects and
              reporting experience.
            </p>
          </div>
        </div>

        <section className="ar-section">
          <SectionHeading>Analytics Experience</SectionHeading>

          {experience.map((job) => (
            <article className="ar-entry" key={job.role}>
              <div className="ar-entry-heading">
                <h3>
                  {job.role} <span>| {job.company}</span>
                </h3>
                <span className="ar-date">{job.date}</span>
              </div>

              {job.location && (
                <p className="ar-muted">{job.location}</p>
              )}

              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <p className="ar-tools">
                <strong>Tools used:</strong> {job.tools}
              </p>
            </article>
          ))}
        </section>

        <section className="ar-section">
          <SectionHeading>Education</SectionHeading>
          <article className="ar-entry">
            <div className="ar-entry-heading">
              <h3>Bachelor of Technology — Computer Science &amp; Engineering</h3>
              <span className="ar-date">08/2023 – 07/2027</span>
            </div>
            <p className="ar-muted">
              Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </p>
          </article>
        </section>

        <section className="ar-section">
          <SectionHeading>Projects</SectionHeading>

          {projects.map((project) => (
            <article className="ar-entry" key={project.title}>
              <h3>{project.title}</h3>
              <p className="ar-tools">{project.tools}</p>

              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="ar-project-links">
                <ExternalLink href={project.github}>View Project</ExternalLink>
                <ExternalLink href={project.live}>Live Dashboard</ExternalLink>
                <ExternalLink href={project.video}>Video Presentation</ExternalLink>
              </div>
            </article>
          ))}
        </section>

        <section className="ar-section">
          <SectionHeading>Skills</SectionHeading>
          <dl className="ar-skills">
            {skills.map((skill) => (
              <div key={skill.name}>
                <dt>{skill.name}</dt>
                <dd>{skill.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="ar-section">
          <SectionHeading>Certifications</SectionHeading>
          <ul className="ar-certifications">
            {certifications.map((certificate) => (
              <li key={certificate.title}>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certificate.title} ↗
                </a>
                <span> — {certificate.org}</span>
              </li>
            ))}
          </ul>
        </section>

       <motion.div className="quick-links">
               <div className="quick-links-list">
                 {quickLinks.map((item, i) => (
                   <motion.a
                     key={i}
                     href={item.link}
                     title={item.title}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.15, rotate: 5 }}
                     transition={{ type: 'spring', stiffness: 250 }}
                   >
                     <motion.img
                       src={item.img}
                       alt={item.title}
                       whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                       className="quick-link-img"
                     />
                   </motion.a>
                 ))}
               </div>
             </motion.div>

        {/* PDF Viewer */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="ar-pdf"
>
  <iframe
    src={resumeView}
    title="Abhishek Singh Chauhan Resume"
    loading="lazy"
    style={{
      width: "100%",
      height: "650px",
      border: "none",
      background: "#111",
      display: "block",
    }}
  />

  <a
    className="ar-pdf-link"
    href={`https://drive.google.com/file/d/${resumeId}/view`}
    target="_blank"
    rel="noopener noreferrer"
  >
    Open PDF in a new tab ↗
  </a>
</motion.div>
      </motion.div>
    </section>
  );
}
