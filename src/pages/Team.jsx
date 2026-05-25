import React from 'react'
import { Link } from 'react-router-dom'
import './Team.css'

const team = [
  {
    name: 'G. Naresh',
    designation: 'Managing Director',
    initials: 'GN',
    color: '#093e6d',
    bio: 'Founder and visionary behind SVJ Eco Flow Systems.',
  },
  {
    name: 'P. Sandeep Naidu',
    designation: 'Chief Technical Engineer',
    photo: '/images/SVJ TEAM/P. Sandeep Naidu.PNG',
    photoPosition: 'center 5%',
    color: '#1b7e44',
    bio: 'Leads all engineering design and commissioning. Expert in MBR, MBBR, and SBR sewage treatment technologies.',
  },
  {
    name: 'S. Jaswanth',
    designation: 'Operations Manager',
    photo: '/images/SVJ TEAM/S. Jaswanth.PNG',
    photoPosition: 'center 65%',
    color: '#0e5fa3',
    bio: 'Oversees day-to-day plant operations and AMC service delivery. Ensures every client SLA is met with precision.',
  },
  {
    name: 'K. Kumar Vishnu',
    designation: 'Business Development Manager',
    photo: '/images/SVJ TEAM/K. Kumar Vishnu.jpeg',
    color: '#145a32',
    bio: 'Drives client relationships and new business across industrial and commercial sectors throughout AP.',
  },
  {
    name: 'A. Siva Chaithanya',
    designation: 'Site & Project Engineer',
    initials: 'ASC',
    color: '#1a5276',
    bio: 'Manages on-site installation and commissioning of STP, RO and pump systems, ensuring quality at every stage.',
  },
  {
    name: 'B. Sumanth',
    designation: 'AMC & Service Coordinator',
    initials: 'BS',
    color: '#196f3d',
    bio: 'Coordinates all maintenance schedules, emergency call-outs, and spare parts logistics for our growing AMC client base.',
  },
]

export default function Team() {
  return (
    <div className="team-page">

      {/* HERO */}
      <div className="team-hero">
        <div className="container">
          <span className="team-tag">Our People</span>
          <h1>The Team Behind SVJ Eco Flow</h1>
          <p>
            A dedicated group of engineers, operators, and business professionals united by
            one goal — delivering reliable water treatment solutions across Andhra Pradesh.
          </p>
        </div>
      </div>

      {/* TEAM GRID */}
      <section className="team-section">
        <div className="container">
          <span className="section-tag center">Who We Are</span>
          <h2 className="section-title">Meet Our Confident Team</h2>
          <p className="section-subtitle">
            Every member brings deep domain expertise and a service-first mindset to every project.
          </p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: member.photo ? 'transparent' : member.color }}>
                  {member.photo
                    ? <img src={member.photo} alt={member.name} className="team-photo" style={{ objectPosition: member.photoPosition || 'center 25%' }} />
                    : <span>{member.initials}</span>}
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <span className="team-designation">{member.designation}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US */}
      <section className="team-join">
        <div className="container team-join-inner">
          <div className="join-text">
            <h2>Want to Join Our Team?</h2>
            <p>
              We're always looking for passionate engineers and field technicians who want to
              make a real impact in water treatment across Andhra Pradesh.
            </p>
            <a href="mailto:Info@svjecoflow.com" className="btn">
              <i className="fas fa-envelope"></i> Send Your Resume
            </a>
          </div>
          <div className="join-image">
            <img src="/images/11.jpg" alt="SVJ team" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta">
        <div className="container team-cta-inner">
          <h3>Ready to work with our expert team?</h3>
          <Link to="/contact#enquiry-form" className="btn">
            <i className="fas fa-paper-plane"></i> Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
