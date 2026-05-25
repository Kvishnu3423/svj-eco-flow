import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => { setDropdownOpen(false) }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+919959992027"><i className="fas fa-phone-alt"></i> +91 9959992027</a>
            <a href="mailto:Info@svjecoflow.com"><i className="fas fa-envelope"></i> Info@svjecoflow.com</a>
            <span><i className="fas fa-map-marker-alt"></i> Vijayawada, Andhra Pradesh</span>
          </div>
          <div className="topbar-right">
            <a href="https://wa.me/919959992027" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/svj.ecoflow?igsh=MWU2dnYzZXVyMWQ4dQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590155134523" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <span className="topbar-badge"><i className="fas fa-headset"></i> 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">

          {/* LOGO */}
          <NavLink to="/" className="logo" onClick={close}>
            <img src="/images/Name.png" alt="SVJ Eco Flow Systems" className="logo-img" />
            SVJ <span>Eco Flow Systems</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/amc">AMC &amp; Maintenance</NavLink></li>
            <li className="nav-dropdown" ref={dropdownRef}>
              <button
                className={`nav-dropdown-btn ${dropdownOpen ? 'active' : ''}`}
                onClick={() => setDropdownOpen(o => !o)}
              >
                Products <i className={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><NavLink to="/products/pumps"><i className="fas fa-tachometer-alt"></i> Pumps</NavLink></li>
                <li><NavLink to="/products/klds"><i className="fas fa-water"></i> KLD'S</NavLink></li>
                <li><NavLink to="/products/lph"><i className="fas fa-chart-line"></i> LPH — Metre³/hr</NavLink></li>
                <li><NavLink to="/products/spare-parts"><i className="fas fa-cogs"></i> Spare Parts</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* DESKTOP CTA */}
          <Link to="/contact#enquiry-form" className="nav-cta-btn">
            <i className="fas fa-headset"></i> Get a Quote
          </Link>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={close}>Services</NavLink></li>
            <li><NavLink to="/amc" onClick={close}>AMC &amp; Maintenance</NavLink></li>
            <li className="mobile-products-label">Products</li>
            <li><NavLink to="/products/pumps" onClick={close} className="mobile-sub-link"><i className="fas fa-tachometer-alt"></i> Pumps</NavLink></li>
            <li><NavLink to="/products/klds" onClick={close} className="mobile-sub-link"><i className="fas fa-water"></i> KLD'S</NavLink></li>
            <li><NavLink to="/products/lph" onClick={close} className="mobile-sub-link"><i className="fas fa-chart-line"></i> LPH — Metre³/hr</NavLink></li>
            <li><NavLink to="/products/spare-parts" onClick={close} className="mobile-sub-link"><i className="fas fa-cogs"></i> Spare Parts</NavLink></li>
            <li><NavLink to="/contact" onClick={close}>Contact</NavLink></li>
          </ul>
          <Link to="/contact#enquiry-form" className="btn mobile-cta" onClick={close}>
            <i className="fas fa-headset"></i> Get a Quote
          </Link>
          <div className="mobile-contact">
            <a href="tel:+919959992037"><i className="fas fa-phone-alt"></i> +91 9959992037</a>
            <a href="mailto:Info@svjecoflow.com"><i className="fas fa-envelope"></i> Info@svjecoflow.com</a>
          </div>
        </div>
      </nav>
    </>
  )
}
