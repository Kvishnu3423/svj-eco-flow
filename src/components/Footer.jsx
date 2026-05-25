import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>SVJ Eco Flow Systems&#8482;</h3>
            <p>Specialists in Water, WasteWater &amp; Pump Lifecycle Management.</p>
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
            <p>24x7 Support: <a href="tel:+919959992027">+91 9959992027</a></p>
            <p>Email: <a href="mailto:Info@svjecoflow.com">Info@svjecoflow.com</a></p>
          </div>
        </div>
        <div className="copyright">
          <p>
            © 2025 SVJ Eco Flow Systems&#8482; — Comprehensive Water &amp; WasteWater treatment Solutions |
            STP, RO, Pump Sales & Maintenance, AMC Services.
          </p>
        </div>
      </div>
    </footer>
  )
}
