import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ComingSoon.css'

const titles = {
  '/products/pumps':       { name: 'Pumps',               icon: 'fas fa-tachometer-alt' },
  '/products/klds':        { name: "KLD'S",                icon: 'fas fa-water' },
  '/products/lph':         { name: 'LPH — Metre³/hr',     icon: 'fas fa-chart-line' },
  '/products/spare-parts': { name: 'Spare Parts',          icon: 'fas fa-cogs' },
}

export default function ComingSoon() {
  const { pathname } = useLocation()
  const page = titles[pathname] || { name: 'Products', icon: 'fas fa-box' }

  return (
    <div className="cs-page">
      <div className="cs-card">
        <div className="cs-icon"><i className={page.icon}></i></div>
        <span className="cs-tag">Coming Soon</span>
        <h1>{page.name}</h1>
        <p>
          We're working on bringing you a complete product catalogue for <strong>{page.name}</strong>.
          Check back soon or get in touch with our team for immediate enquiries.
        </p>
        <div className="cs-actions">
          <Link to="/contact#enquiry-form" className="btn">
            <i className="fas fa-paper-plane"></i> Enquire Now
          </Link>
          <Link to="/" className="btn btn-cs-outline">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
        <div className="cs-notify">
          <i className="fas fa-bell"></i>
          <span>Want to be notified when this page launches? <a href="mailto:Info@svjecoflow.com">Email us</a></span>
        </div>
      </div>
    </div>
  )
}
