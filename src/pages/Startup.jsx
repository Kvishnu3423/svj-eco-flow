import React from 'react'
import { Link } from 'react-router-dom'
import './Startup.css'

const milestones = [
  { year: '2022', title: 'Founded', desc: 'SVJ Eco Flow Systems was established in Vijayawada with a mission to deliver reliable, eco-compliant water treatment solutions across Andhra Pradesh.' },
  { year: '2023', title: 'First Major Project', desc: 'Commissioned our first large-scale STP for a commercial township in Vijayawada, setting the standard for quality and on-time delivery.' },
  { year: '2024', title: 'AMC Division Launched', desc: 'Launched a dedicated Annual Maintenance Contract division, bringing round-the-clock emergency support and structured O&M services to clients.' },
  { year: '2025', title: 'Expanding Across AP', desc: 'Extended operations to Guntur, Krishna, and surrounding districts, growing our client base across industrial, commercial, and residential sectors.' },
]

const values = [
  { icon: 'fas fa-leaf',             title: 'Eco-First Engineering',   desc: 'Every system we design prioritises zero-discharge targets and minimal environmental impact.' },
  { icon: 'fas fa-handshake',        title: 'Client Partnership',       desc: 'We treat every project as a long-term partnership, not a one-off transaction.' },
  { icon: 'fas fa-shield-alt',       title: 'Reliability Above All',    desc: 'Uptime is non-negotiable. Our AMC plans and 24/7 support ensure your plant never stays down.' },
  { icon: 'fas fa-drafting-compass', title: 'End-to-End Ownership',     desc: 'Civil, mechanical, electrical, automation — we handle every phase under one roof.' },
  { icon: 'fas fa-lightbulb',        title: 'Innovation-Driven',        desc: 'IoT monitoring, MBR technology, VFD automation — we adopt the best tools available.' },
  { icon: 'fas fa-users',            title: 'People-Powered',           desc: 'Our certified engineers bring passion and precision to every installation and service call.' },
]

export default function Startup() {
  return (
    <div className="startup-page">

      {/* HERO */}
      <div className="startup-hero">
        <div className="container">
          <span className="startup-tag">Our Story</span>
          <h1>A Young Team with a Big Mission — Clean Water for All.</h1>
          <p>
            SVJ Eco Flow Systems started as a bold idea — that clean water infrastructure
            should be accessible, reliable, and professionally maintained for every business
            and community across the region.
          </p>
          <div className="startup-hero-btns">
            <Link to="/contact#enquiry-form" className="btn">
              <i className="fas fa-calendar-alt"></i> Work With Us
            </Link>
            <Link to="/team" className="btn btn-outline-dark">
              <i className="fas fa-users"></i> Meet the Team
            </Link>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <section className="startup-mission">
        <div className="container startup-mission-grid">
          <div className="mission-image">
            <img src="/images/Work Site (1).png" alt="SVJ team at work" />
          </div>
          <div className="mission-text">
            <span className="section-tag">Our Mission</span>
            <h2>Turning Clean Water into a Guarantee, Not a Luxury</h2>
            <p>
              We believe every industrial facility, commercial complex, and residential community
              deserves water treatment infrastructure that works — day in, day out. SVJ Eco Flow
              Systems was founded to bridge the gap between high-quality engineering and
              accessible, transparent maintenance services.
            </p>
            <p>
              From the first site survey to years of post-installation support, we stay with
              our clients for the full lifecycle of their plant.
            </p>
            <div className="mission-stats">
              <div className="mstat"><span>AP-Wide</span><label>Service Coverage</label></div>
              <div className="mstat"><span>24/7</span><label>Emergency Support</label></div>
              <div className="mstat"><span>4 hrs</span><label>Max Response SLA</label></div>
            </div>
          </div>
        </div>
      </section>


      {/* VALUES */}
      <section className="startup-values">
        <div className="container">
          <span className="section-tag center">What We Stand For</span>
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon"><i className={v.icon}></i></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="startup-cta" style={{ backgroundImage: 'url(/images/3.jpg)' }}>
        <div className="startup-cta-overlay">
          <div className="container">
            <h2>Ready to Be Part of Our Growth Story?</h2>
            <p>Get in touch for a free site assessment or partnership enquiry.</p>
            <Link to="/contact#enquiry-form" className="btn">
              <i className="fas fa-paper-plane"></i> Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
