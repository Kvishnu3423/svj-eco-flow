import React from 'react'
import { Link } from 'react-router-dom'
import './Team.css'

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

      {/* JOIN US */}
      <section className="team-join">
        <div className="container team-join-inner">
          <div className="join-text">
            <span className="section-tag">Join Our Team</span>
            <h2>We're Looking for Passionate People</h2>
            <p>
              We're always looking for passionate engineers and field technicians who want to
              make a real impact in water treatment across Andhra Pradesh.
            </p>
            <p>
              Whether you're a fresh graduate or an experienced professional, if you share our
              commitment to clean water and quality service — we'd love to hear from you.
            </p>
            <div className="join-btns">
              <a
                href="https://www.linkedin.com/company/svj-eco-flow-systems"
                target="_blank"
                rel="noreferrer"
                className="btn btn-linkedin"
              >
                <i className="fab fa-linkedin"></i> Send Us Your Resume
              </a>
              <a href="mailto:Info@svjecoflow.com" className="btn btn-outline-join">
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
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
