import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import './Home.css'

const serviceHighlights = [
  {
    icon: 'fas fa-industry',
    title: 'Sewage Treatment Plants',
    desc: 'MBR, MBBR & SBR technologies for residential, commercial & industrial clients.',
    img: '/images/1.jpg',
    route: '/services',
  },
  {
    icon: 'fas fa-fill-drip',
    title: 'RO & Water Purification',
    desc: 'High-recovery reverse osmosis systems with energy-efficient pre-treatment.',
    img: '/images/6.jpg',
    route: '/services',
  },
  {
    icon: 'fas fa-faucet-drip',
    title: 'Pump Systems',
    desc: 'Multistage, submersible & centrifugal pumps with VFD automation panels.',
    img: '/images/5.jpg',
    route: '/services',
  },
  {
    icon: 'fas fa-handshake',
    title: 'AMC & Maintenance',
    desc: 'Annual maintenance contracts with 4-hour emergency SLA and spare parts cover.',
    img: '/images/Maintainance.png',
    route: '/amc',
  },
]

const galleryImages = [
  { src: '/images/3.jpg',  label: 'Industrial Treatment Facility' },
  { src: '/images/2.png',  label: 'Aerial – Multi-Tank STP' },
  { src: '/images/8.jpg',  label: 'Circular Clarifier – Drone View' },
  { src: '/images/4.jpg',  label: 'Aeration Tanks – Night Operation' },
  { src: '/images/10.jpg', label: 'Four-Tank Clarifier Array' },
  { src: '/images/9.jpg',  label: 'In-Field Water Quality Testing' },
]

const whyUs = [
  { icon: 'fas fa-drafting-compass', text: 'End-to-end turnkey project delivery' },
  { icon: 'fas fa-headset',          text: '24/7 emergency breakdown support' },
  { icon: 'fas fa-certificate',      text: 'Certified O&M engineers on every project' },
  { icon: 'fas fa-leaf',             text: 'Zero-discharge & eco-compliant designs' },
  { icon: 'fas fa-wifi',             text: 'IoT-enabled remote plant monitoring' },
  { icon: 'fas fa-rupee-sign',       text: 'Transparent, competitive AMC pricing' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title left-align">
              Andhra Pradesh's Trusted Water &amp; Wastewater Specialists
            </h2>
            <p>
              SVJ Eco Flow Systems is a Vijayawada-based engineering company that designs,
              installs, and maintains complete water treatment infrastructure for industrial,
              commercial, and residential clients across Andhra Pradesh.
            </p>
            <p>
              From compact rooftop RO units to large-scale sewage treatment plants, our
              certified team handles every phase — civil, mechanical, electrical, and
              automation — under one roof. We believe clean water is non-negotiable, and
              we back that belief with round-the-clock support and transparent AMC plans.
            </p>
            <div className="about-badges">
              <div className="badge"><i className="fas fa-map-marker-alt"></i> Vijayawada, AP</div>
              <div className="badge"><i className="fas fa-certificate"></i> Certified O&amp;M</div>
              <div className="badge"><i className="fas fa-headset"></i> 24/7 Support</div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/11.jpg" alt="SVJ engineers reviewing plant operations" />
            <div className="about-image-caption">
              <i className="fas fa-users"></i> Our field engineering team
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE HIGHLIGHTS ── */}
      <section className="home-services-section">
        <div className="container">
          <span className="section-tag center">What We Do</span>
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">
            Specialised water treatment solutions built for long-term performance and compliance.
          </p>
          <div className="home-services-grid">
            {serviceHighlights.map((s, i) => (
              <div className="hs-card" key={i}>
                <div
                  className="hs-card-img"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="hs-card-body">
                  <div className="hs-icon"><i className={s.icon}></i></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.route} className="hs-link">
                    View Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="gallery-section">
        <div className="container">
          <span className="section-tag center">Our Work</span>
          <h2 className="section-title">Projects &amp; Installations</h2>
          <p className="section-subtitle">
            A glimpse of the water treatment infrastructure we've built and maintain across the region.
          </p>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div className={`gallery-item gi-${i}`} key={i}>
                <img src={img.src} alt={img.label} />
                <div className="gallery-overlay">
                  <span>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="container why-grid">
          <div className="why-image">
            <img src="/images/12.jpg" alt="Clarifier tank reflecting the sky" />
          </div>
          <div className="why-text">
            <span className="section-tag">Why SVJ</span>
            <h2 className="section-title left-align">
              Built on Engineering Excellence &amp; Reliability
            </h2>
            <p>
              We don't just install systems — we partner with clients for the full lifecycle.
              Our team combines deep technical expertise with a service-first mindset to keep
              your plant running at peak performance, year after year.
            </p>
            <ul className="why-list">
              {whyUs.map((w, i) => (
                <li key={i}>
                  <span className="why-icon"><i className={w.icon}></i></span>
                  {w.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="home-cta-section"
        style={{ backgroundImage: 'url(/images/3.jpg)' }}
      >
        <div className="home-cta-overlay">
          <div className="container home-cta-content">
            <h2>Ready to Upgrade Your Water Infrastructure?</h2>
            <p>
              Get a free site assessment and a customised proposal for your STP, RO plant,
              pump system, or AMC requirement.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">
                <i className="fas fa-calendar-alt"></i> Request a Free Quote
              </Link>
              <Link to="/services" className="btn btn-outline btn-outline-white">
                <i className="fas fa-wrench"></i> Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
