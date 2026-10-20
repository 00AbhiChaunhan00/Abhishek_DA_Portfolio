// skills_images
import excelLogo from "./assets/optimized/excel.webp";
import sqlLogo from "./assets/tech_logo/sql.jpg";
import powerbiLogo from "./assets/tech_logo/power-bi-icon.webp";
import queryLogo from "./assets/tech_logo/powerquery.jpg";
import pivotLogo from "./assets/optimized/powerpivotlogo.webp";
import mysqlLogo from "./assets/optimized/mysql.webp";
import daxLogo from "./assets/tech_logo/dax.jpeg";
import gitLogo from "./assets/optimized/git.webp";
import githubLogo from "./assets/optimized/github.webp";
import vscodeLogo from "./assets/optimized/vscode.webp";
import AWSLogo from "./assets/optimized/AWS.webp";
import BricksLogo from "./assets/tech_logo/dataBricks.jpg";
import ModellingLogo from "./assets/optimized/dataModelling.webp";
import dbtLogo from "./assets/optimized/dbt.webp";
import TestingLogo from "./assets/optimized/hypothesis_testing.webp";
import JupyterLogo from "./assets/tech_logo/jupyter.svg";
import MatplotlibLogo from "./assets/optimized/matplotlib.webp";
import n8nLogo from './assets/optimized/n8n.webp';
import NumpyLogo from './assets/tech_logo/numpy.svg';
import PandasLogo from './assets/tech_logo/panda.svg';
import StarLogo from './assets/tech_logo/star.webp';
import StatisticsLogo from './assets/tech_logo/statistics.jpg';
import postgreLogo from './assets/optimized/postgre.webp';
import pythonLogo from './assets/optimized/python.webp';

// project_images
import Project1Logo from "./assets/optimized/Project1Logo.webp";
import Project2Logo from "./assets/optimized/Project2Logo.webp";

import WorldAtlasLogo from "./assets/optimized/wordAtlasLogo.webp";
import PortfolioLogo from "./assets/optimized/MyPortfolioLogo.webp";

//education_logo
import CollegeLogo from "./assets/education_logo/college_logo.jpg";
import XLogo from "./assets/optimized/CbseBoard.webp";
import XIILogo from "./assets/optimized/UPBoard.webp";

export const SkillsInfo = [
  {
    title: "Data Analysis",
    skills: [
      { name: "Excel", logo: excelLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "Power BI", logo: powerbiLogo },
      { name: "Power Query", logo: queryLogo },
      { name: "Power Pivot", logo: pivotLogo },
      { name: "DAX", logo: daxLogo }
      
    ],
  },
  {
    title: "Databases & Warehousing",
    skills: [
 
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
       { name: "Databricks", logo: BricksLogo },
        { name: "DBT", logo: dbtLogo },
         { name: "Data Modelling", logo: ModellingLogo },
          { name: "Star Schema", logo: StarLogo }
  
    ],
  },
  {
    title: "Programming & Statistics",
    skills: [
    
      {name:'Python', logo:pythonLogo},
       {name:'Pandas', logo:PandasLogo},
        {name:'NumPy', logo:NumpyLogo},
         {name:'Matplotlib', logo:MatplotlibLogo},
          {name:'Statistics', logo:StatisticsLogo},
           {name:'Hypothesis Testing', logo:TestingLogo}
   
    ],
  },
  {
    title: "Tools & Automation",
    skills: [
      { name: "n8n", logo: n8nLogo },
       { name: "AWS", logo: AWSLogo },
      { name: "Git", logo: gitLogo },
      { name: "Jupyter Notebook", logo: JupyterLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo }
    ],
  },
];

export const projects = [
  {
  id: 0,
  title: "Business Performance & Decision Analytics",
  description:"Built a 1M+ record Business Analytics solution using Power BI, SQL, MySQL, DAX, Power Query, and n8n. Identified a $54.65M profitability gap and added Alerts, RCA, and automated data validation.",
  image: Project1Logo,
  tags: [
    "Power BI",
    "SQL",
    "MySQL",
    "DAX",
    "Power Query",
    "n8n",
    "Automation"
  ],
  github: "https://github.com/00AbhiChaunhan00/Business-Performance-Decision-Analytics",
  webapp:"https://app.powerbi.com/view?r=eyJrIjoiZTBjYTJiZmEtODg4NS00Y2Q5LTgxODgtMjZmYjhjZjVjMjA0IiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
  video: "https://lnkd.in/p/g39KAq7E",
},

  {
  id: 1,
  title: "Customer Behavior & Revenue Analytics",
  description:
    "Built a customer analytics solution using Power BI, SQL, MySQL, DAX, and RFM Analysis to analyze customer value, retention, churn, and revenue concentration. Identified that the top 20% of customers contribute ~45.5% of revenue and highlighted high-value At-Risk customers for retention prioritization.",
  image: Project2Logo,
  tags: [
    "Power BI",
    "SQL",
    "MySQL",
    "DAX",
    "Power Query",
    "RFM Analysis",
  ],
  github: "https://github.com/00AbhiChaunhan00/Customer-Behavior-Revenue-Analytics",
  webapp: "https://app.powerbi.com/view?r=eyJrIjoiZjQzOTkzNTMtZGJhNS00MzljLTg2NTItOGI0NmM2MzY0NGRlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
  video: "your_kinof_link",
},

  {
    id: 2,
    title: "World Atlas",
    description:
      "A modern, responsive React web application to explore countries of the world with key facts, flags, and details.This project fetches live data from APIs and presents it in a clean, user-friendly interface.",
    image: WorldAtlasLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "React-Router"],
    github: "https://github.com/00AbhiChaunhan00/world-atlas",
    webapp: "https://world-atlas-00.vercel.app/",
    video: "your_kinof_link",
  },

  {
    id: 3,
    title: "My Portfolio",
    description:
      "A personal developer portfolio featuring a dynamic interface, gradient UI theme, and mobile-first design. Includes project showcasing, skill categorization, and easy navigation to demonstrate frontend development expertise. Hosted online with fast loading performance",
    image: PortfolioLogo,
    tags: ["React JS", "Tailwind", "React-Routes","E-mailJS", "Validation"],
    github: "https://github.com/00AbhiChaunhan00/Porfolio",
    webapp: "your_kinof_link",
    video: "your_kinof_link",
  },
];

export const education = [
  {
    id: 0,
    img: CollegeLogo,
    school: "MIIT College, Meerut",
    date: "Aug 2023 - July 2027",
    grade: "Pursuing",
    desc: "I am pursuing  my Bachelor of Technology in Computer Science and Engineering (B.Tech) from MIIT College, Meerut. Throughout my studies, I am immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MIIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: XIILogo,
    school: "TLS Inter College, Etah",
    date: "Apr 2022 - Mar 2023",
    grade: "79%",
    desc: "I completed my class 12 education from TLS Inter College,Etah, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UP Board (XII) - PCM",
  },
  {
    id: 2,
    img: XLogo,
    school: "U.S.M Public School Veena Enclave, Delhi",
    date: "Apr 2020 - March 2021",
    grade: "83%",
    desc: "I completed my class 10 education from U.S.M Public School, Nangloi, under the CBSE board, where I studied Science with IT.",
    degree: "CBSE(X), Science with Information Technology",
  },
];







  