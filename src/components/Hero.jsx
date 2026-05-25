import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-droplet"></i> Complete Water &amp; Wastewater Solutions
          </div>
          <h1>STP | WTP | RO Plants | Pumps | AMC Services &amp; Maintenance</h1>
          <p>
            SVJ Eco Flow Systems delivers turnkey water treatment plants, reverse osmosis systems,
            sewage treatment, pump installations, and reliable Annual Maintenance Contracts (AMC)
            for industrial &amp; commercial clients.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn">
              <i className="fas fa-calendar-alt"></i> Get AMC Quote
            </Link>
            <Link to="/services" className="btn btn-outline">
              <i className="fas fa-wrench"></i> Explore Services
            </Link>
          </div>
          <div className="hero-stats">
            <div><i className="fas fa-rocket"></i> Startup</div>
            <div><i className="fas fa-users"></i> Confident Team</div>
            <div><i className="fas fa-headset"></i> 24/7 Support</div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/logo.png" alt="SVJ Eco Flow Systems" />
        </div>
      </div>
    </section>
  )
}
