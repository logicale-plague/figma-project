'use client';

import { useState } from 'react';

export default function Home() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  return (
    <div className="desktop">
      <img className="background" src="/img/background.svg" alt="background" />
      <header className="header">
        <div className="name">John Angelo Cabalfin</div>
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
                  setResumeDropdownOpen(false);
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
                  setResumeDropdownOpen(false);
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
            I'm a Computer Science graduate from Iloilo who enjoys building structured, maintainable
            systems that solve real-world problems. With a foundation in software development and a
            growing interest in UX, I focus on clarity, usability, and long-term thinking.
          </p>
        </div>
        <div className="intro-buttons">
          <button className="projects-button">
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
              I'm currently staying in Iloilo city with the dream of breaking into tech. I'm drawn
              to building structured, reliable systems designed with long-term clarity in mind.
              <br />
              <br />
              Outside of tech, I volunteer at local animal shelters — an experience that has shaped
              my sense of responsibility and patience. <br />
              <br />I'm also inspired by fantasy literature, where thoughtful world-building and
              strong systems bring stories to life.
              <br />
              <br />
              To me, good software — like good stories — is built with care and meant to endure.
            </p>
          </div>
          <div className="image"></div>
        </div>
      </div>
      <div className="div-2">
        <div className="div-3">
          <div className="text-wrapper-2">Projects</div>
          <img className="img" src="/img/image.svg" alt="divider" />
        </div>
        <div className="projects-list">
          {[
            {
              id: 1,
              image: "/img/image.png",
              title: "The Green Knight",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
              githubVector: "/img/vector-10.svg",
              projectVector: "/img/vector-2.svg",
            },
            {
              id: 2,
              image: "/img/project-image-3.png",
              title: "The Green Knight",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
              githubVector: "/img/vector-6.svg",
              projectVector: "/img/vector-3.svg",
            },
            {
              id: 3,
              image: "/img/project-image.png",
              title: "The Green Knight",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
              githubVector: "/img/vector.svg",
              projectVector: "/img/vector-5.svg",
            },
            {
              id: 4,
              image: "/img/project-image-2.png",
              title: "The Green Knight",
              tags: ["CSS3", "HTML5", "JavaScript"],
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, velit vitae rutrum venenatis, elit orci aliquam risus, et hendrerit nunc nulla at odio. Morbi hendrerit hendrerit aliquam. Duis tristique tortor orci, ut finibus magna condimentum eu. Nullam vel nibh quis metus pulvinar aliquam. Quisque euismod varius aliquam.",
              githubVector: "/img/vector-7.svg",
              projectVector: "/img/vector-8.svg",
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
          <p className="contact-copyright">© John Angelo Cabalfin 2026</p>
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
