
import React from "react";
import { motion } from "framer-motion";
import "../CSS/About.css";

// Education logos — existing files from src/assets/education_logos/
import collegeLogo from "../assets/education_logo/college_logo.jpg";
import upBoardLogo from "../assets/education_logo/UPBoard.png"; 
import cbseLogo from "../assets/education_logo/CbseBoard.png";

const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
    school: "MIIT College, Meerut",
    date: "Aug 2023 - July 2027",
    grade: "Pursuing",
    desc:
      "I am pursuing my Bachelor of Technology in Computer Science and Engineering (B.Tech) from MIIT College, Meerut. Throughout my studies, I am immersed in a variety of subjects that deepen my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gain practical insights into software development. My time at MIIT College allows me to work on projects that apply theoretical concepts to real-world problems.",
    img: collegeLogo,
  },
  {
    id: "class12",
    degree: "UP Board (XII) - PCM",
    school: "TLS Inter College, Etah",
    date: "Apr 2022 - Mar 2023",
    grade: "79%",
    desc:
      "Completed Class XII under the Uttar Pradesh Board with Physics, Chemistry, and Mathematics. This academic foundation strengthened my analytical thinking, problem-solving skills, and understanding of core scientific concepts.",
    img: upBoardLogo,
  },
  {
    id: "class10",
    degree: "CBSE (X) - Science with IT",
    school: "U.S.M Public School, Veena Enclave, Delhi",
    date: "Apr 2020 - Mar 2021",
    grade: "83%",
    desc:
      "Completed Class X under the CBSE board with Science and Information Technology. This stage helped build my foundation in science, logical thinking, and computer-related concepts.",
    img: cbseLogo,
  },
];

const About = () => {
  return (
    <main className="page about-education-page">
      <section className="about-education-container">
        {/* Preserve the About page heading style */}
        <motion.header
          className="about-education-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1>
            Education<span>.</span>
          </h1>

          <p>
            My academic journey, learning experiences, and educational
            foundation.
          </p>

          <div className="about-education-heading-line" />
        </motion.header>

        {/* Connected education timeline */}
        <div className="education-timeline">
          <div className="education-timeline-line" aria-hidden="true" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              className={`education-timeline-item ${
                index % 2 === 0
                  ? "education-item-left"
                  : "education-item-right"
              }`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span
                className="education-timeline-node"
                aria-hidden="true"
              />

              <article className="education-card">
                <div className="education-card-header">
                  <div className="education-card-logo">
                    <img src={item.img} alt={`${item.school} logo`} />
                  </div>

                  <div className="education-card-title-group">
                    <h2>{item.degree}</h2>
                    <h3>{item.school}</h3>

                    <p className="education-card-date">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="2"
                        />
                        <path d="M16 3v4M8 3v4M3 10h18" />
                      </svg>
                      {item.date}
                    </p>
                  </div>
                </div>

                <p className="education-card-grade">
                  <strong>Grade:</strong> {item.grade}
                </p>

                <p className="education-card-description">{item.desc}</p>
              </article>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="education-footer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="education-footer-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M2 10 12 4l10 6-10 6-10-6Z" />
              <path d="M6 13v5c3.5 3 8.5 3 12 0v-5M22 10v6" />
            </svg>
          </span>
          <p>
            Learning never stops. I continue to strengthen my technical
            knowledge through practical projects and continuous learning.
          </p>
        </motion.footer>
      </section>
    </main>
  );
};

export default About;
