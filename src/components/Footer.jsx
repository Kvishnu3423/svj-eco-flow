import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>SVJ Eco Flow Systems</h3>
            <p>Specialists in water, wastewater &amp; pump lifecycle management.</p>
            <p>
              <i className="fas fa-certificate"></i> Certified O&amp;M
            </p>
          </div>
          <div>
            <h4>Quick Services</h4>
            <p>STP / WTP / RO Plants</p>
            <p>Pump repair &amp; VFD panels</p>
            <p>Preventive AMC packages</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>24x7 Helpline: +91 9959992027</p>
            <p>Email: Info@svjecoflow.com</p>
          </div>
        </div>
        <div className="copyright">
          <p>
            © 2025 SVJ Eco Flow Systems — Comprehensive water &amp; wastewater treatment solutions |
            STP, RO, Pump maintenance, AMC services.
          </p>
        </div>
      </div>
    </footer>
  )
}
