
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Certificates data
const CERTS = {
  tech: [
    {
      title: "Data Analytics Bootcamp",
      org: "Codebasics",
      date: "2026",
      img: "/certs/DA_bootcamp_certs.png",
      link: "https://codebasics.io/certificate/CB-BT-1-733458",
    },
    {
      title: "Data Analyst Intern",
      org: "AtliQ Technologies",
      date: "2026",
      img: "/certs/Intership1_certs.png", 
      link: "https://codebasics.io/certificate/CB-VI-87-733458",
    },
    {
      title: "Data Analytics Job Simulation",
      org: "Deloitte",
      date: "2026",
      img: "/certs/delloite_certs.png",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_uY9AM8n2MSiCHbAnQ_1770791404476_completion_certificate.pdf",
    },
  ],
  other: [
    {
      title: "SQL Intermediate",
      org: "HackerRank",
      date: "2026",
      img: "/certs/HackerRank.png",
      link: "https://www.hackerrank.com/certificates/b491e8c2dc7a?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
    },
    {
      title: "AI Automation For Data Professional",
      org: "CodeBasics",
      date: "2026",
      img: "/certs/Automation_certs.png", 
      link: "https://codebasics.io/certificate/CB-104-733458",
    },
    {
      title: "Microsoft MS Excel",
      org: "Microsoft",
      date: "2026",
      img: "/certs/Excel_certs.png",   
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTgzNDU3Ml8xMDEwMDg4NV8xNzcwODc4MjQzNTg3LnBuZyIsInVzZXJuYW1lIjoiQUJISVNIRUsgU0lOR0ggQ0hBVUhBTiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4277%2FIntroduction%2520to%2520MS%2520Excel%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{
          background: "#111",
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#fff",
            marginBottom: 4,
          }}
        >
          Certificates 🏅
        </h2>

        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical &amp; others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />

                <strong style={{ fontSize: 16 }}>{c.title}</strong>

                <div
                  className="muted"
                  style={{ fontSize: 13, color: "#bbb" }}
                >
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  {/* Opens this certificate's own link */}
                  <a
                    className="btn"
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                  >
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
