import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
// C:\Users\Abhishek\Downloads\Kunj-Portfolio-main\Kunj-Portfolio-main\src\assets\optimized\excel.webp
import excelLogo from "../assets/optimized/excel.webp";
import sqlLogo from "../assets/tech_logo/sql.jpg";
import powerbiLogo from "../assets/tech_logo/power-bi-icon.webp";
import queryLogo from "../assets/tech_logo/powerquery.jpg";
import pivotLogo from "../assets/optimized/powerpivotlogo.webp";
import mysqlLogo from "../assets/optimized/mysql.webp";
import daxLogo from "../assets/tech_logo/dax.jpeg";
import gitLogo from "../assets/optimized/git.webp";
import githubLogo from "../assets/optimized/github.webp";
import vscodeLogo from "../assets/optimized/vscode.webp";
import AWSLogo from "../assets/optimized/AWS.webp";
import BricksLogo from "../assets/tech_logo/dataBricks.jpg";
import ModellingLogo from "../assets/optimized/dataModelling.webp";
import dbtLogo from "../assets/optimized/dbt.webp";
import TestingLogo from "../assets/optimized/hypothesis_testing.webp";
import JupyterLogo from "../assets/tech_logo/jupyter.svg";
import MatplotlibLogo from "../assets/optimized/matplotlib.webp";
import n8nLogo from '../assets/optimized/n8n.webp';
import NumpyLogo from '../assets/tech_logo/numpy.svg';
import PandasLogo from '../assets/tech_logo/panda.svg';
import StatisticsLogo from '../assets/tech_logo/statistics.jpg';
import postgreLogo from '../assets/optimized/postgre.webp';
import pythonLogo from '../assets/optimized/python.webp';

const SKILLS = [
  { name: "Python", logo: pythonLogo },
  { name: "MS Excel", logo: excelLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "Power BI", logo: powerbiLogo },
  { name: "Power Query", logo: queryLogo },
  { name: "Power Pivot", logo: pivotLogo },
  { name: "MYSql", logo: mysqlLogo },
  { name: "DAX", logo: daxLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "AWS", logo: AWSLogo },
  { name: "DataBricks", logo: BricksLogo },
  { name: "Data Modelling", logo: ModellingLogo },
  { name: "DBT", logo: dbtLogo },
  { name: "Hypothesis Testing", logo: TestingLogo },
  { name: "Jupyter Notebook", logo: JupyterLogo },
  { name: "Matplotlib", logo: MatplotlibLogo },
  { name: "n8n", logo: n8nLogo },
  { name: "Numpy", logo: NumpyLogo },
  { name: "Pandas", logo: PandasLogo },
  { name: "Statistics", logo: StatisticsLogo },
  { name: "postgres", logo: postgreLogo }
];

const ROWS = [
  [
    {
      title: "Programming Languages",
      items: ["Python", "SQL", "R"]
    },
    {
      title: "Data Analytics & Visualization",
      items: ["Microsoft Excel", "Power BI", "Tableau", "Matplotlib", "Seaborn"]
    },
    {
      title: "Databases & Tools",
      items: ["MySQL", "PostgreSQL", "Git", "GitHub"]
    },
    {
      title: "Data Processing & Libraries",
      items: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"]
    }
  ],
  [
    {
      title: "Cloud & Data Engineering",
      items: ["AWS S3", "AWS Glue", "Amazon Athena", "Amazon Redshift", "PySpark", "Databricks", "dbt"]
    },
    {
      title: "Core Analytics Concepts",
      items: [
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Transformation",
        "Statistical Analysis",
        "Customer Segmentation",
        "Cohort & Retention Analysis",
        "Demand Forecasting",
        "KPI Development"
      ]
    },
    {
      title: "Business Intelligence",
      items: [
        "Dashboard Development",
        "Data Visualization",
        "Business Reporting",
        "DAX",
        "Power Query",
        "Business Insights"
      ]
    },
    {
      title: "Professional Skills",
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Communication",
        "Attention to Detail",
        "Business Understanding"
      ]
    }
  ]
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          ✨ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs with page-load + hover highlight animation */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "550px",
          borderRadius: "25px",
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          overflow: "hidden",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
          position: "relative",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,255,255,0.06)",
              border: "1px solid rgba(0,255,255,0.25)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              transition: "box-shadow 0.4s ease, background 0.4s ease",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)",
                marginBottom: "5px",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span
              style={{
                color: "rgba(180,255,255,0.9)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.3px",
              }}
            >
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table (Text Section) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
