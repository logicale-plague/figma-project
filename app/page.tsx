'use client';

import { useState } from 'react';

export default function Home() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  const handleDownload = (format: 'pdf' | 'docx') => {
    const filename = format === 'pdf' ? 'resume.pdf' : 'resume.docx';
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeDropdownOpen(false);
  };

  return (
    <div className="desktop">
      <img className="background" src="/img/background.svg" alt="background" />
      <header className="header">
        <div className="name">Benjamin I. Ramos III</div>
        <div className="resume-button" style={{ position: 'relative' }}>
          <button
            className="text-wrapper"
            onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            Download Resume
            <span style={{ fontSize: '12px' }}>▼</span>
          </button>
          {resumeDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#4e6a57',
                borderRadius: '8px',
                marginTop: '8px',
                minWidth: '180px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 10,
              }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload('pdf');
                }}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Download PDF
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload('docx');
                }}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Download DOCX
              </a>
            </div>
          )}
        </div>
      </header>
      <div className="intro-section">
        <div className="intro-text-container">
          <p className="intro-title">
            I design and develop reliable systems with a human-centered approach.
          </p>
          <img className="line" src="/img/line-1.svg" alt="line" />
          <p className="intro-description">
            I'm a Computer Science student from CPU who enjoys building structured, maintainable
            systems that solve real-world problems. With a foundation in software development and a
            growing interest in UX, I focus on clarity, usability, and long-term thinking.
          </p>
        </div>
        <div className="intro-buttons">
          <button className="projects-button" onClick={() => {
            const projectsSection = document.getElementById('projects-section');
            projectsSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <div className="div">Projects</div>
          </button>
          <button className="projects-button-wrapper">
            <div className="projects-button-2">Contact</div>
          </button>
        </div>
      </div>
      <div className="intro-section">
        <div className="frame">
          <div className="frame-2">
            <div className="about-me-title">About Me</div>
            <p className="about-me-description">
              I'm currently staying in Pavia, Iloilo with the dream of breaking into tech. I'm drawn
              to building structured, reliable systems designed with long-term clarity in mind.
              <br />
              <br />
              Outside of programming, I am also a game tester and enjoy exploring new games and mechanics. <br />
              <br />I'm also inspired by fantasy literature, where thoughtful world-building and
              strong systems bring stories to life.
              <br />
              <br />
              To me, good software are those which are scalable, maintainable, and designed with the user in mind. I strive to create solutions that not only meet immediate needs but also adapt to future challenges, ensuring a seamless and intuitive experience for users.
            </p>
          </div>
          <div className="image">
            <img className="" src="/img/okra.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <div className="div-2" id="projects-section">
        <div className="div-3">
          <div className="text-wrapper-2">Projects</div>
          <img className="img" src="/img/image.svg" alt="divider" />
        </div>
        <div className="projects-list">
          {[
            {
              id: 1,
              image: "/img/sad.jpg",
              title: "Review Clinic",
              tags: ["Flutter", "Supabase"],
              description:
                "A web application designed to help medical professionals manage patient reviews and clinic operations. Features include patient feedback submission, review analytics, and appointment scheduling. Built with a focus on user experience and accessibility for healthcare providers.",
              githubVector: "/img/github_logo.png",
              projectVector: "/img/folder.jpg",
            },
            {
              id: 2,
              image: "/img/database.jpeg",
              title: "Mr. Pares Inventory System",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "An inventory management system built for a local restaurant to track stock levels, manage suppliers, and optimize ordering processes. Includes real-time inventory updates, low-stock alerts, and comprehensive reporting features to streamline business operations.",
              githubVector: "/img/github_logo.png",
              projectVector: "/img/folder.jpg",
            },
            {
              id: 3,
              image: "/img/discrete.jpg",
              title: "PSMath LMS",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "A Learning Management System designed for mathematics education. Features include interactive problem sets, progress tracking, and instructor dashboards for managing student learning. Includes support for discrete mathematics topics with visualization tools.",
              githubVector: "/img/github_logo.png",
              projectVector: "/img/folder.jpg",
            },
            {
              id: 4,
              image: "/img/networking.jpg",
              title: "Network Scanner",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "A network diagnostic tool that scans and analyzes network infrastructure. Provides detailed reports on connected devices, network topology, and security vulnerabilities. Designed for IT administrators to maintain network health and identify potential issues.",
              githubVector: "/img/github_logo.png",
              projectVector: "/img/folder.jpg",
            },
          ].map((project) => (
            <div key={project.id} className="project-card">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-info">
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="project-title">{project.title}</div>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <div key={tag} className="project-tag">
                          <div className="project-tag-2">{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="frame-5">
                  <div className="project-links">
                    <button className="button">
                      <div className="button-2">Github Repo</div>
                      <div className="vector-wrapper">
                        <img className="vector" src={project.githubVector} alt="github" />
                      </div>
                    </button>
                    <button className="button-3">
                      <div className="button-4">Open Project</div>
                      <div className="vector-wrapper">
                        <img className="vector-2" src={project.projectVector} alt="open" />
                      </div>
                    </button>
                  </div>
                  <div className="project-description-wrapper">
                    <div className="project-description-2">Read More</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="div-2">
        <div className="contact-info">
          <div className="contact-title">
            <div className="text-wrapper-2">Let's Work Together</div>
            <img className="line-2" src="/img/line-1-2.svg" alt="line" />
          </div>
          <div className="text-wrapper-3">Iloilo, Philippines</div>
          <div className="text-wrapper-3">gelcabalfin@gmail.com</div>
        </div>
        <div className="div-3">
          <p className="contact-copyright">© Benjamin I. Ramos III 2026</p>
        </div>
        <div className="social-links">
          <div className="img-wrapper">
            <img className="vector" src="/img/vector-9.svg" alt="social-1" />
          </div>
          <div className="img-wrapper">
            <img className="vector-2" src="/img/vector-4.svg" alt="social-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
